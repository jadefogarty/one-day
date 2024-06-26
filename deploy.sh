#!/ysr/bin/env bash
sudo apt update && sudo apt install nodejs npm
# Install pm2 which is a production process manager for Node.js with a built-in load balancer.
sudo npm install -g pm2
# stop any instancw of our appication running currently
pm2 stop devopssec_app
cd one-day/
# Install application dependancies
npm install
#import enviornmental variables
echo $PRIVATE_KEY > privatekey.pem
echo $SERVER > server.crt
echo "NASA_API_KEY=$NASA_API_KEY" > .env
echo "TMDB_API_KEY=$TMDB_API_KEY" >> .env
# Start the application with the process name devopssec_app using pm2
pm2 start ./bin/www --name devopssec_app