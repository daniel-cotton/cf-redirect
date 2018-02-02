# CF Redirect
A simple Cloud Foundry app for redirecting requests to your cloud foundry app to another host.

## Quickstart
1) Clone this repo
2) Run the following in your terminal:
```bash
cf push <your-app-name-goes-here> --hostname <hostname-youd-like-to-redirect-from>
```
3) Find the running app in cloud foundry, and add an environment variable for the new host
```
REDIRECT_HOST=http://my.new.host/
```
