# parce que j'ai la flemme de ré-écrire la cmd tout le temps
NODEMON_BINARY="nodemon" #nodemon on dev, `forever start server.js` on production
NPM="npm"

ipLocal=$(ip addr | grep -Po '(?!(inet 127.\d.\d.1))(inet \K(\d{1,3}\.){3}\d{1,3})')
echo "Local IP is : $ipLocal"

#command -v is checking a path for a binary (as whereis)
#But if path was not found, 0 is not return to shell
command -v "$NODEMON_BINARY" >> /dev/null
if [ $? -eq 0 ]; then
    $NODEMON_BINARY -x $NPM start
else
    $NPM start
fi
