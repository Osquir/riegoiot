import { NextResponse } from 'next/server';
import User from '@/models/user';
import { connectDB } from '@/libs/mongodb';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const { fullname, email, password } = await request.json();

  if (!password || password.length < 6)
    return NextResponse.json(
      {
        message: 'Password must be at least 6 characters',
      },
      {
        status: 400,
      }
    );

  //updated
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email || !emailRegex.test(email))
    return NextResponse.json(
      {
        message: 'Invalid email',
      },
      {
        status: 400,
      }
    );

  try {
    await connectDB();

    // Obtén la fecha actual al inicio del día
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Obtén la fecha actual al final del día
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Cuenta cuántos usuarios se han registrado hoy
    const usersToday = await User.countDocuments({
      createdAt: {
        $gte: today,
        $lt: tomorrow,
      },
    });

    // Si ya se han registrado 10 usuarios hoy, no permitas un nuevo registro
    if (usersToday >= 10)
      return NextResponse.json(
        { message: 'Registration limit reached for today' },
        { status: 400 }
      );

    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      fullname,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    // console.log(savedUser);

    return NextResponse.json({
      message: 'User created successfully',
      _id: savedUser._id,
      email: savedUser.email,
      fullname: savedUser.fullname,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
