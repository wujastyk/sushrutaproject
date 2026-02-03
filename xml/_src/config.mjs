const config = {
    xslt: '../tei-to-html.xsl',
    files: [
        {
            input: ['../../01-su.su-1-31/kl_699_sutrasthana-1-31.txt',
                    '../../01-su.su-32-end/kl_699_sutrasthana-32-end.txt'],
            output:    '../01-su.su/kl_699_sutrasthana.xml',
            meta: [
                ['//titleStmt/title','Transcription of MS Kathmandu KL 699: Sūtrasthāna'],
                ['//revisionDesc','']
            ]
        },
        {
            input: '../../02-su.ni/kl_699_nidanasthana.txt',
            output:   '../02-su.ni/kl_699_nidanasthana.xml',
            meta: [
                ['//titleStmt/title','Transcription of MS Kathmandu KL 699: Nidānasthāna'],
                ['//revisionDesc','']
                ]
        },
        {
            input:  ['../../04-su.ci-1-20/kl_699_cikitsasthana_01-20.txt',
                    '../../04-su.ci-21-40/kl_699_cikitsasthana_21-40.txt'],
            output:    '../04-su.ci/kl_699_cikitsasthana.xml',
            meta: [
                ['//titleStmt/title','Transcription of MS Kathmandu KL 699: Cikitsāsthāna'],
                ['//revisionDesc','']
                ]
        },
        {
            input: '../../05-su.ka/kl_699_kalpasthana.txt',
            output:   '../05-su.ka/kl_699_kalpasthana.xml',
            meta: [
                ['//titleStmt/title','Transcription of MS Kathmandu KL 699: Kalpasthāna'],
                ['//revisionDesc','']               
                ]
        },
        {          
            input: ['../../06-su.ut-01-26-salakya/kl_699_uttaratantra-01-26.txt',
                    '../../06-su.ut-27-37-kumara/kl_699_uttaratantra-27-37.txt',
                    '../../06-su.ut-38-59-kayacikitsa/kl_699_uttaratantra-38-59.txt',
                    '../../06-su.ut-60-62-bhuta/kl_699_uttaratantra-60-62.txt',
                    '../../06-su.ut-63-66-tantrabhusana/kl_699_uttaratantra-63-66.txt'],
            output:    '../06-su.ut/kl_699_uttaratantra.xml',
            meta: [
                ['//titleStmt/title','Transcription of MS Kathmandu KL 699: Uttaratantra'],
                ['//revisionDesc','']                
                ]
        },
    ]
};

export default config;
