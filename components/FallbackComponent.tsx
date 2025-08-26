export default async function FallbackComponent(): Promise<JSX.Element> {
  return (
    <div className="bg-gray-800 text-gray-100 rounded-lg p-4 border border-gray-700 w-[500px]">
      I am a fallback component. You see me because an error was caught successfully.
    </div>
  );
}
