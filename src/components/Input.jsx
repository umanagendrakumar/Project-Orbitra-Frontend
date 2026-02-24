export const Input = ({ label, ...props }) => (
  <div className="flex flex-col">
    <label className="text-sm text-gray-600 mb-1">{label}</label>
    <input
      {...props}
      className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
    />
  </div>
);

export const Select = ({ label, options, ...props }) => (
  <div className="flex flex-col">
    <label className="text-sm text-gray-600 mb-1">{label}</label>
    <select
      {...props}
      className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
    >
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);