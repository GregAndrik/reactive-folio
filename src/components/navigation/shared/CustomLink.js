import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})    
  return (
    <li className={isActive ? "active" : ""}>
      <Link
        to={to}
        style={
          isActive
            ? {
                color: "var(--color-dark)", // Active text color
                backgroundColor: "var(--color-accent)", // Active background color
              }
            : {
                color: "var(--color-accent)", // Default text color
              }
        }

        onMouseLeave={(e) => {
          if (!isActive) {
            // On hover exit
            e.target.style.color = "var(--color-accent)";
          }
        }}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;