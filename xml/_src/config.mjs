const config = {
    xslt: '../tei-to-html.xsl',
    files: [
        {
            input: ['../../01-su.su-1-31/kl_699_sutrasthana-1-31.txt',
                    '../../01-su.su-32-end/kl_699_sutrasthana-32-end.txt'],
            output: '../01-su.su/kl_699_sutrasthana.xml',
            meta: [
                ['//titleStmt/title','MS Kathmandu KL 699'],
                ['//facsimile','']
            ]
        },
        {
            input: '../../02-su.ni/kl_699_nidanasthana.txt',
            output: '../02-su.ni/kl_699_nidanasthana.xml'
        },
        {
            input:  ['../../04-su.ci-1-20/kl_699_cikitsasthana_01-20.txt',
                    '../../04-su.ci-21-40/kl_699_cikitsasthana_21-40.txt'], 
            output: '../04-su.ci/kl_699_cikitsasthana.xml',
            meta: [
                ['//titleStmt/title','MS Kathmandu KL 699'],
                ['//facsimile','']
            ]
        
        },
    ]
};

export default config;
