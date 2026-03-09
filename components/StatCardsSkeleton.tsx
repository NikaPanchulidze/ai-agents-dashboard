const StatCardsSkeleton: React.FunctionComponent = () => {
  return (
    <div className="grid gap-6 mb-8 md:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="h-32 rounded-xl bg-gray-200 p-4 animate-pulse flex flex-col justify-between"
        >
          <div className="h-4 w-3/5 bg-gray-300 rounded"></div>
          <div className="h-8 w-2/3 bg-gray-300 rounded mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default StatCardsSkeleton;
