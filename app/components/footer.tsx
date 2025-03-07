"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaReddit, 
  FaMedium,
  FaBluesky,
  FaRss,
  FaDiscord,
  FaSpotify,
  FaYoutube
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";
import EmailModal from "./EmailModal";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon, onClick }: { href: string; icon: any; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      <Icon />
    </a>
  );
}

function SocialLinks({ onEmailClick }) {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.reddit} icon={FaReddit} />
      <SocialLink href={socialLinks.youtube} icon={FaYoutube} />
      <SocialLink href={socialLinks.medium} icon={FaMedium} />
      <SocialLink href={socialLinks.bluesky} icon={FaBluesky} />
      <SocialLink href={socialLinks.discord} icon={FaDiscord} />
      <SocialLink href={socialLinks.spotify} icon={FaSpotify} />
      <SocialLink href="#" icon={TbMailFilled} onClick={onEmailClick} />
      <a href="/rss.xml" target="_self">
        <FaRss />
      </a>
    </div>
  );
}

export default function Footer() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
        <time>© {YEAR}</time>{" "}
        <a
          className="no-underline"
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metaData.title}
        </a>
        <style jsx>{`
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
        <SocialLinks onEmailClick={handleEmailClick} />
      </small>
      <EmailModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}