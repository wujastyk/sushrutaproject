These are vibe-coded python scripts that have been created for specific file-checking and editing of the manuscript transcription files.  To run them, download and mark as executable and put them in your system’s executable path. 

* pb-incrementer
  This program reads two arguments, a number and a filename.  It will find the ocurrences of the `<pb>` element and increment the value of the `facs` attribute every second occurrence.  E.g., 

  ```
  <pb facs="22"/>
  <pb facs="22"/>
  <pb facs="23"/>
  <pb facs="23"/>
  <pb facs="24"/>
  <pb facs="22"/>
  ```

* xml-meld 
  This opens a graphical interface where you can select files (txt or xml) and have their xml:id values compared in a visually helpful way.  This helps to weed out inconsistencies in passage ID numbering across numerous files.

Dominik Wujastyk
April 2026
