module.exports = {
    title: 'Helsefagarbeider',
    lang: 'en-US',
    base: '/sprintify-helse/',
    
    themeConfig: {

        editLinks: true,
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Updated',

        algolia: {
            apiKey: '',
            indexName: 'lessons'
        },

        nav: [
            { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
            {
                text: 'Pensum og bøker',
                link: '/config/pensum',
                activeMatch: '^/config/'
            },
            {
                text: 'Helse linker',
                link: 'https://utdanning.no/yrker/beskrivelse/helsefagarbeider'
            }
        ],

        sidebar: {
            '/guide/': getGuideSidebar(),
            '/config/': getConfigSidebar(),
            '/': getGuideSidebar()
        }
    }
}

function getGuideSidebar () {
    return [
        {
            text: 'Guide',
            children: [
                { text: 'Hva er fagprøven', link: '/' },
                { text: 'Fagprøven - gjennomføring', link: '/guide/gjennomforing' },
                { text: 'Dag 1', link: '/guide/dag-1' },
                { text: 'Dag 2', link: '/guide/dag-2' },
                { text: 'Karakter', link: '/guide/karakterer' }

            ]
        },
        {
            text: 'Oppgaver',
            children: [
                { text: 'Teori', link: '/guide/teori' },
                {
                    text: 'Praksis',
                    link: '/guide/praksis'
                }
            ]
        }
    ]
}

function getConfigSidebar () {
    return [
        {
            text: 'Pensum og bøker',
            children: [
                { text: 'Pensum og bøker', link: '/config/pensum' },
                { text: 'Helsefag 1', link: '/config/helsefag-1' },
                { text: 'Helsefag 2', link: '/config/helsefag-2' },
                { text: 'Kommunikasjon 1', link: '/config/kommunikasjon-1' },
                { text: 'Kommunikasjon 2', link: '/config/kommunikasjon-2' },
                { text: 'Yrke 1', link: '/config/yrke-1' },
                { text: 'Yrke 2', link: '/config/yrke-2' }
            ]
        },
        {
            text: 'Search',
            children: [
                { text: 'Litteratur', link: '/config/litteratur' },
                { text: 'Algolia Search', link: '/config/algolia-search' }
                // { text: 'Carbon Ads', link: '/config/carbon-ads' }
            ]
        }
    ]
}