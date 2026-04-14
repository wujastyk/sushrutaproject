<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:exsl="http://exslt.org/common" xmlns:x="http://www.tei-c.org/ns/1.0" xmlns:tst="https://github.com/tst-project" exclude-result-prefixes="x tst">
<xsl:import href="../lib/xslt/tei-to-html.xsl"/>

<xsl:output method="html" encoding="UTF-8" omit-xml-declaration="yes"/>

<xsl:variable name="root">../lib/</xsl:variable>

<xsl:template match="x:TEI">
    <xsl:call-template name="TEI"/>
</xsl:template>

</xsl:stylesheet>
