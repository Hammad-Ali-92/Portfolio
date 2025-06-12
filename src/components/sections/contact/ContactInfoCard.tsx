import React from "react";

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content?: string;
  subContent?: string;
  action?: {
    href: string;
    text: string;
  };
  socialLinks?: Array<{
    icon: React.ReactNode;
    href: string;
  }>;
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon,
  title,
  content,
  subContent,
  action,
  socialLinks
}) => {
  return (
    <div className="pixel-card hover:border-accent p-4">
      <div className="p-3 border-2 text-accent border-accent inline-block">
        {icon}
      </div>
      <h3 className="text-lg mt-4 mb-1 font-pixel">{title}</h3>
      {content && <p className="text-muted-foreground">{content}</p>}
      {subContent && (
        <p className="text-muted-foreground text-sm mt-1">{subContent}</p>
      )}
      {action && (
        <a 
          href={action.href} 
          className="text-accent hover:underline mt-1 inline-block"
        >
          {action.text}
        </a>
      )}
      {socialLinks && (
        <div className="flex gap-4 mt-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border-2 hover:text-accent hover:border-accent transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};