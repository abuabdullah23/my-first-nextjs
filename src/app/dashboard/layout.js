export const metadata = {
    title: 'Dashboard | My First Next Js',
    description: 'My First Next Js',
  }

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div>Side Bar</div>
            {children}
        </div>
    );
};

export default DashboardLayout;