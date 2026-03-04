export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Your AI Clips</h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-900 p-4 rounded">
          <video controls src="/sample.mp4" />
          <p className="mt-2 text-sm">Generated Clip</p>
        </div>
      </div>
    </div>
  );
}
