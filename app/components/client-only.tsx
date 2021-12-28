import * as React from "react";

const ClientOnly = ({ children, ...props }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...props}>{children}</div>;
};

export default ClientOnly;
