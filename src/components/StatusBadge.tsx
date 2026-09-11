import type { ReactNode } from "react";

interface StatusBadgeProps {
  isAvailable: boolean;
  children?: ReactNode;
}

const StatusBadge = ({ isAvailable, children }: StatusBadgeProps) => {
  return (
    <>
      <p>
        {isAvailable ? (
          <span className="bg-green-500 text-white px-2 py-1 rounded">
            Open to work
          </span>
        ) : (
          <span className="bg-gray-500 text-white px-2 py-1 rounded">
            Busy learning
          </span>
        )}
      </p>
      {children}
    </>
  );
};

export default StatusBadge;
