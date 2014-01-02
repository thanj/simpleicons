for icon in `ls icons`; do
    inkscape -z -d 90 -w 40 -h 40 -e "/home/goldenapples/Documents/simpleicons/icons/${icon}/${icon}-40-black.png" "/home/goldenapples/Desktop/icons/${icon}/${icon}-black.svg"
    inkscape -z -d 90 -w 40 -h 40 -e "/home/goldenapples/Documents/simpleicons/icons/${icon}/${icon}-40.png" "/home/goldenapples/Desktop/icons/${icon}/${icon}.svg"
    # inkscape -z -d 90 -w $size -h $size -e "/home/goldenapples/Documents/simpleicons/icons/${icon}/${icon}-${size}-black.png" "/home/goldenapples/Desktop/icons/${icon}/${icon}-black.svg"
done;

