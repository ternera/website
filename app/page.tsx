import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.bluesky} target="_blank">
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
        I'm just a dude who is interested in IT, coding, community management, and technology in general. I wear a bunch of different hats on the inernet. I'm happy to chat with you. feel free to reach out to me!
        </p>
        <p>
        <li>I am always working to become more like Jesus in thought and deed.</li>
        <li>I love beautiful things, like the outdoors and artwork.</li>
        <li>I manage some communities on Reddit and Discord.</li>
        <li>I enjoy learning new things and improving my skills. I'm trying to get better at Linux, programming, troubleshooting, and problem solving.</li>
        </p>
        <p>
        Since a young age, I have been interested in computers and how they work. This has helped me become familiar with Windows, Linux, and MacOS ecosystems as well as basic helpdesk/troubleshooting techniques.
        </p>
        <p>
        In some of my free time, I help out as a global administrator on Wikipedia. This involves miscellaneous maintenance on the site and occasional spam cleanup. At the time of writing, I also lead a few Reddit communities with a total of 20 million members and a Discord server with 10 thousand members!
        I've been able to automate some ruitine moderation tasks by using writing filters and bots. It's also taught me a lot about customer service and conflict resolution! I'm open to doing freelance community management work!
        </p>
        <p> 
        Occasionally, I’ll play games like Counter-Strike: Global Offensive or Minecraft. I’m not a competitive or experienced gamer by any means, but it’s fun to sit back and enjoy a gaming session with friends sometimes!
        </p>
        <p>
        I’m a firm believer in <a href="https://en.wiktionary.org/wiki/touch_grass">touching grass</a> and highly recommend it. Get outside and do things! 😀
        </p>
      </div>
    </section>
  );
}
