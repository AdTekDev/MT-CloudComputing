# MT-CloudComputing

Heroku Cli

CMDs - https://devcenter.heroku.com/articles/heroku-cli-commands

heroku auth:login
heroku login


heroku addons --all
heroku apps
heroku domains
heroku apps:errors
heroku apps:info 
heroku buildpacks

# specify a buildpack
  $ heroku apps:create --buildpack https://github.com/some/buildpack.git

  # specify a name
  $ heroku apps:create example

  # create a staging app
  $ heroku apps:create example-staging --remote staging
  
# set git remote
set git remote heroku to https://git.heroku.com/example.git

$ heroku git:remote -a example
