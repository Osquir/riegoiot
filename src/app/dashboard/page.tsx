import DashboardComponent from "@/components/dashboard-component";

export const metadata = {
  title: 'Panel de control',
  description: 'Visualiza datos clave, métricas y estadísticas en tiempo real en tu panel de control para tomar decisiones informadas y gestionar tu información de manera eficiente.'
};


function Dashboard() {
  return (
    <div className=''>
      <DashboardComponent />
    </div>
  );
}

export default Dashboard;
