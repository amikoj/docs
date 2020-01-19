/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 网站配置
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
    {
        caption: 'amiko',
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/image.jpg'.
        image: '/img/undraw_open_source.svg',
        infoLink: 'http://www.enjoytoday.cn',
        pinned: true,
    },
];

const siteConfig = {
    title: '胖蔡文档', // Title for your website.
    tagline: '天下没有难学的语言',
    url: 'http://wiki.mediastack.cn', // Your website URL
    baseUrl: '/', // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',
    defaultVersionShown: '1.0.0',
    // Used for publishing and more
    projectName: 'docs',
    organizationName: 'amiko',

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        // Links to document with id doc1 for current language/version
        {doc: 'python/sanic/installation', label: 'Sanic'},
        {doc: 'kotlin/begin', label: 'Kotlin'},
        // {doc: 'doc1', label: 'Python'},
        // {doc:'doc4', label:'Android'},
        // {page: 'help', label: 'Help'},

        // Links to href destination
        {href: "http://www.enjoytoday.cn", label: "胖蔡杂谈"},
    ],

    // If you have users set above, you add it here:
    users,

    /* path to images for header/footer */
    headerIcon: 'img/favicon.ico',
    footerIcon: 'img/favicon.ico',
    favicon: 'img/favicon.ico',

    /* Colors for website */
    colors: {
        primaryColor: '#00ad8c',
        secondaryColor: '#007962',
    },

    /* Custom fonts for website */

    fonts: {
        myFont: [
            "Times New Roman",
            "Serif"
        ],
        myOtherFont: [
            "-apple-system",
            "system-ui"
        ]
    },


    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} 胖蔡杂谈`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    // Open Graph and Twitter card images.
    ogImage: 'img/undraw_online.svg',
    twitterImage: 'img/undraw_tweetstorm.svg',

    // For sites with a sizable amount of content, set collapsible to true.
    // Expand/collapse the links and subcategories under categories.
    docsSideNavCollapsible: true,

    // Show documentation's last contributor's name.
    enableUpdateBy: true,
    blogSidebarCount: 'ALL',
    // Show documentation's last update time.
    enableUpdateTime: true,
    scripts: [
        'https://buttons.github.io/buttons.js',
        "https://s9.cnzz.com/z_stat.php?id=1278584832&web_id=1278584832",
        {
            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
            async: true,
            "data-ad-client": "ca-pub-5905842540305144"
        },
    ],
    // algolia: {
    //    apiKey: '0f9f28b9ab9efae89810921a351753b5',
    //    indexName: 'github',
    //  },
    //编辑地址
    editUrl: 'https://github.com/amikoj/docs/edit/master/docs/',
    scrollToTop: true,
    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
