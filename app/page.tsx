import MainSlide from './main.slide/main.slide'

const appname = process.env.PROJECT_NAME;

export default function HomePage () {
  return (
    <main style={{ width: "100%", margin: "4em auto" }}>
      {/* <h1>Next.js on Vercel</h1>
      <p>Your application is live and running on {appname}.</p> */}

    <div style={{ width:  }}>
        <MainSlide />
    </div>

    </main>
  );
}