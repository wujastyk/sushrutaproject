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
    ]
};

export default config;
