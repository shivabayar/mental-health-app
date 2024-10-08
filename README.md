Install node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# download and install Node.js (you may need to restart the terminal)
nvm install 18

Create google api key

open .env.production and replace YOUR_GOOGLE_API_KEY with ur api key

brew install sqlite3

add the below 3 lines in bash_profile

`export LDFLAGS="-L/opt/homebrew/opt/sqlite/lib"`
`export CPPFLAGS="-I/opt/homebrew/opt/sqlite/include"`
`export PATH="/opt/homebrew/opt/sqlite/bin:$PATH"`

run `source ~/.bash_profile`


run `./runApplication.sh`