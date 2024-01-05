import DashboardComponent from '@/components/dashboard-component';

export const metadata = {
  title: 'Panel de control',
  description:
    'Visualiza datos clave, métricas y estadísticas en tiempo real en tu panel de control para tomar decisiones informadas y gestionar tu información de manera eficiente.',
};

async function Dashboard() {
  //dalay response
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className=''>
      <DashboardComponent />
    </div>
  );
}

export default Dashboard;
