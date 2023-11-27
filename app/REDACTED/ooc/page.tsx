export default function OocPage() {
  return (
    <main className="flex flex-col items-center text-center p-5 w-4/5 m-auto">
      <p> Hey Fallcon here!</p>
      <p>
        {" "}
        The project is a bit unfinished but the idea is just a ic way of showing
        off our blorbos.{" "}
      </p>
      <p>
        {" "}
        Keep in mind when writing its meant to be a TOP SECRET database from a
        division of solgov spys
      </p>
      <p className="pt-10"> Todo. </p>
      <div className="text-left">
        <p> - Add a way to edit/remove a mark. </p>
        <p>
          {" "}
          - I have a cool search bar for the database but im having trouble
          getting it working with postgres. After that is working
          /REDACTED/viewmarks will prob just be in /REDACTED{" "}
        </p>
        <p>
          {" "}
          - Pull names from the manifest? IDK if thats weird or not but its
          mostly to pad out the database
        </p>
        <p> - Figure out what im doing with the factions tab. </p>
      </div>
    </main>
  );
}
