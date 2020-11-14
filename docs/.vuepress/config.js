module.exports = {
  title: "Bottle of Music",
  base: "/",
  dest: "public",
  description: "Bottle of Music Blog",
  logo: "./assets/img/icon.png",
  theme: require.resolve("../../"),
  themeConfig: {
    logo: "./assets/img/icon.png",
    authors: [
      {
        name: "Alice Dini",
        avatar: "/assets/img/ad.jpg",
      },
      {
        name: "Alessandro",
        avatar: "/assets/img/ac.png",
      }
    ],
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Tags",
        link: "/tag/"
      },
      {
        text: "Informazioni",
        link: "/informazioni/"
      },
      {
        text: "Contatti",
        link: "/contatti/"
      }
    ],
    footer: {
      contact: [
        {
          type: "facebook",
          link: "https://www.facebook.com/bottleofmusic/"
        },
        {
          type: "instagram",
          link: "https://www.instagram.com/bottleofmusic/"
        },
        {
          type: "twitter",
          link: "https://twitter.com/bottle_of_music"
        },
        {
          type: "mail",
          link: "mailto:bottleofmusicblog@gmail.com"
        },
        {
          type: "mixcloud",
          link: "https://www.mixcloud.com/bottleofmusic/"
        },
      ],
      copyright: [
        {
          text: "Copyright &copy; Bottle of Music. Tutti i diritti riservati. All rights reserved."
        }
      ]
    },
    sitemap: {
      hostname: "https://github.com/wowthemesnet/vuepress-theme-mediumish/"
    },
    comment: {
      service: "disqus",
      shortname: "demowebsite"
    },
    newsletter: {
      endpoint: "https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b"
    },
    feed: {
      canonical_base: "https://github.com/wowthemesnet/vuepress-theme-mediumish/"
    },
    smoothScroll: true
  }
};
