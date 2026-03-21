import sys
import os
import re
import subprocess
from datetime import datetime

def update_facs_and_compare(filepath):
    # Ensure the file exists
    if not os.path.isfile(filepath):
        print(f"Error: Cannot find file {filepath}")
        sys.exit(1)
        
    # Read the original XML/TEI file
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    counter = None
    
    # Function to apply to each <pb> tag found
    def replace_facs(match):
        nonlocal counter
        pb_tag = match.group(0)
        
        # Look for the facs attribute and capture the quote type and value
        facs_match = re.search(r'facs=(["\'])(.*?)\1', pb_tag)
        
        if not facs_match:
            # If a <pb> tag doesn't have a facs attribute, leave it exactly as is
            return pb_tag
            
        quote_type = facs_match.group(1)
        current_val = facs_match.group(2)
        
        if counter is None:
            # This is the first <pb> tag with a facs attribute we've encountered
            try:
                counter = int(current_val)
            except ValueError:
                print(f"Warning: First facs value '{current_val}' is not an integer.")
            # Do not modify the first valid facs value
            return pb_tag
        
        # Increment the counter for subsequent tags
        counter += 1
        
        # Replace only the facs attribute string within this specific <pb> tag
        new_tag = re.sub(r'facs=["\'].*?["\']', f'facs={quote_type}{counter}{quote_type}', pb_tag, count=1)
        return new_tag

    # Find all <pb ...> tags and pass them to the replacement function
    updated_content = re.sub(r'<pb\b[^>]*>', replace_facs, content)
    
    # Generate a unique output filename in the same directory
    directory = os.path.dirname(os.path.abspath(filepath))
    filename = os.path.basename(filepath)
    name, ext = os.path.splitext(filename)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    out_filename = f"{name}_updated_{timestamp}{ext}"
    out_filepath = os.path.join(directory, out_filename)
    
    # Write the modified content to the new file
    with open(out_filepath, 'w', encoding='utf-8') as f:
        f.write(updated_content)
        
    print(f"Successfully processed: {filename}")
    print(f"Saved to: {out_filename}")
    
    # Launch meld to visually compare the two files
    print("Launching meld for visual comparison...")
    try:
        subprocess.run(['meld', filepath, out_filepath])
    except FileNotFoundError:
        print("Error: 'meld' is not installed or not found in your system PATH.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python update_facs.py <path_to_tei_file.xml>")
        sys.exit(1)
        
    update_facs_and_compare(sys.argv[1])
