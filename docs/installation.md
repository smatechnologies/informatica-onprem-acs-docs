---
slug: '/'
sidebar_label: 'Installation'
---
# Requirements
The ACS Informatica software requires that the Informatica client software be installed on the same system.

- OpCon Cloud or OpCon DataCenter version 25.0.3 or greater.
- Fully configured Informatica Client software.
- Oracle User that has access rights to the Informatica Repository.
- Informatica User that has privileges to execute the defined tasks.

# Informatica Installation

Download the ACS Informatica software from the SMA FTP Site.
Location will be in
**/OpCon Releases/Integrations/Informatica/** 
Select the required version.

- Unzip the Informatica.zip file.
- On-prem customers 
  Copy the Informatica directory to the \\SAM\\plugins directory
  Restart the **SMA OpCon Services Manager** and **SMA OpCon RestAPI** service.
- Cloud customers
  Copy the Informatica directory to the \\Relay\\plugins directory
  Restart the **SMA OpCon Relay** service.

# Informatica ACS Upgrade

Download the ACS Informatica selected software upgrade from the SMA FTP Site.
Location will be in
**/OpCon Releases/Integrations/Informatica/** 

- Unzip the KubernetesJob.zip file.
- On-prem customers 
  Stop the **SMA OpCon Services Manager** and **SMA OpCon RestAPI** service.
  Copy the Informatica directory to the \\SAM\\plugins directory
  Restart the **SMA OpCon Services Manager** and **SMA OpCon RestAPI** service.
- Cloud customers
  Stop the **SMA OpCon Relay** service.
  Copy the Informatica directory to the \\Relay\\plugins directory
  Restart the **SMA OpCon Relay** service.