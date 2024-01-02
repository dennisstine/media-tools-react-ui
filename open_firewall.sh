sudo firewall-cmd --get-active-zones

sudo firewall-cmd --zone=FedoraServer --add-service=http --permanent
sudo firewall-cmd --zone=FedoraServer --add-service=https --permanent
sudo firewall-cmd --zone=FedoraServer --add-service=dns --permanent
sudo firewall-cmd --zone=FedoraServer --add-service=dhcpv6-client --permanent

sudo firewall-cmd --reload

sudo firewall-cmd --zone=FedoraServer --list-services
