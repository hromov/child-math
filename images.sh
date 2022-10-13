search_dir=./assets/images
file_to_save=./api/images.txt
rm -f $file_to_save
for entry in "$search_dir"/*
do
    echo "${entry:1}" >> "$file_to_save"
done