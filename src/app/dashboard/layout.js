import DashboardNav from "@/components/Navbar/Dashboard/DashboardNav/DashboardNav";

export const metadata = {
    title: 'Dashboard | My First Next Js',
    description: 'My First Next Js',
  }

const DashboardLayout = ({ children }) => {
    return (
        <div className="container mx-auto flex gap-10">
            <DashboardNav/>
            {children}
        </div>
    );
};

export default DashboardLayout;