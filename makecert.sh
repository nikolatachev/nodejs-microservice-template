#!/bin/bash

mkcert create-ca
mkcert create-cert --domains localhost,127.0.0.1,::1

#sudo npm install -g mkcert
#sudo mkcert create-ca
#sudo mkcert create-cert --domains {} --validity=1024

#Production
#sudo mkcert create-cert --domains {} --validity=1024
echo "Don't forget to register the ca certificate to the trusted root certificates"