const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex justify-center mt-20 items-center h-full'>
      {children}
    </div>
  );
};

export default AuthLayout;
