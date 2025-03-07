import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
      Hey, I’m ternera - nice to meet you!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I'm just a dude who is interested in IT, coding, community management, and technology in general. Feel free to reach out to me if you want to chat!
        </p>
        <p>
        <li>I am always working to become more like Jesus in thought and deed.</li>
        <li>I manage some communities on Reddit and Discord.</li>
        <li>I enjoy beautiful things, like the outdoors and viewing artwork.</li>
        <li>I enjoy learning new skills and getting better at existing ones. Currently, I'm interested in learning moer about Linux, programming, troubleshooting, and problem solving.</li>
        </p>
        <p>
        Since a young age, I have been interested in computers and how they work. This has helped me become familiar with Windows, Linux, and MacOS ecosystems as well as basic helpdesk/troubleshooting techniques.
        </p>
        <p>
        In some of my free time, I help as a global system operator at Wikipedia. This involves performing maintenance tasks various Wikipedia projects and occasional spam cleanup. At the time of writing, I also lead a few Reddit communities with a total of 23 million members and a Discord server with 17 thousand members!
        I've been able to automate some ruitine moderation tasks by writing filters and bots. It's also taught me a lot about customer service and conflict resolution! I'm open to doing freelance community management work!
        </p>
        <p> 
        Occasionally, I’ll play games like Counter-Strike: Global Offensive or Minecraft. I’m not a competitive or experienced gamer by any means, but it’s fun to sit back and enjoy a gaming session with friends sometimes!
        </p>
        <p>
        I’m a firm believer in <a href="https://en.wiktionary.org/wiki/touch_grass">touching grass</a> and highly recommend it. Get outside and do things! 😀 Oh, and if you haven't received Jesus Christ's <a href="https://www.biblegateway.com/">free gift of salvation</a>, you should look into that!
        </p>
      </div>
    </section>
  );
}
