import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';

const SocialMediaIcons = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="p-3 bg-travel-card border border-travel-border rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMediaIcons;