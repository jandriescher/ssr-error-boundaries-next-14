export default async function HealthyServerComponent(): Promise<JSX.Element> {
  return (
    <div className="bg-green-800 text-green-100 rounded-lg p-4 border border-green-700 w-[500px]">
      I am a healthy server component. You will see me.
    </div>
  );
}
