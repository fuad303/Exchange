const Circle = () => {
  return (
    <div className="relative w-48 h-48 rounded-full bg-white">
      <div className="pie-chart-slice w-full h-full bg-blue-500 rounded-full"></div>
      <div className="pie-chart-slice w-3/4 h-3/4 bg-green-400 rounded-full"></div>
      <div className="pie-chart-slice w-2/3 h-2/3 bg-orange-300 rounded-full"></div>
      <div className="pie-chart-slice w-1/2 h-1/2 bg-gray-400 rounded-full"></div>
      <div className="pie-chart-slice w-1/4 h-1/4 bg-blue-300 rounded-full"></div>
    </div>
  );
};

export default Circle;
