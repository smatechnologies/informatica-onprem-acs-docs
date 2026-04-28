---
title: Install the Informatica On-Prem ACS connector
description: "System requirements and installation steps for the Informatica On-Prem ACS connector."
tags:
  - Procedural
  - System Administrator
  - Installation
sidebar_label: 'Installation'
---

# Install the Informatica On-Prem ACS connector

**Theme:** Build | **Audience:** System Administrator

## What is it?

The Informatica On-Prem ACS connector provides access to Informatica On-prem environment workflows via the ACS (Agentless Connector System) framework. Install the connector to enable OpCon to submit and monitor Informatica workflows as part of your automated schedules.

- Use this when setting up OpCon to manage Informatica workflows for the first time.
- Use this when upgrading an existing Informatica On-Prem ACS connector to a newer version.
- Supports both on-premises OpCon deployments and cloud deployments using SmaRelay.

## Requirements

The ACS Informatica software requires that the Informatica client software be installed on the same system.

- OpCon Cloud or OpCon DataCenter version 25.0.3 or greater.
- Fully configured Informatica Client software.
- Oracle User that has access rights to the Informatica Repository.
- Informatica User that has privileges to run the defined jobs.

## Informatica installation

To install the Informatica On-Prem ACS connector, complete the following steps:

1. Download the ACS Informatica software from the SMA FTP site. The software is located at `/OpCon Releases/Integrations/Informatica/`.
2. Select the required version.
3. Unzip the `Informatica.zip` file.
4. Copy and restart services based on your environment:

   **On-prem customers:**

   a. Copy the Informatica directory to `\SAM\plugins`.
   b. Restart the **SMA OpCon Services Manager** and **SMA OpCon RestAPI** services.

   **Cloud customers:**

   a. Copy the Informatica directory to `\Relay\plugins`.
   b. Restart the **SMA OpCon Relay** service.

The connector is available in Solution Manager after the services restart.

## Informatica ACS upgrade

To upgrade the Informatica On-Prem ACS connector, complete the following steps:

1. Download the ACS Informatica software upgrade from the SMA FTP site. The software is located at `/OpCon Releases/Integrations/Informatica/`.
2. Select the required version.
3. Unzip the `Informatica.zip` file.
4. Stop services, copy files, and restart services based on your environment:

   **On-prem customers:**

   a. Stop the **SMA OpCon Services Manager** and **SMA OpCon RestAPI** services.
   b. Copy the Informatica directory to `\SAM\plugins`.
   c. Restart the **SMA OpCon Services Manager** and **SMA OpCon RestAPI** services.

   **Cloud customers:**

   a. Stop the **SMA OpCon Relay** service.
   b. Copy the Informatica directory to `\Relay\plugins`.
   c. Restart the **SMA OpCon Relay** service.

The connector is available in Solution Manager after the services restart.

## FAQs

**Do I need to reinstall OpCon to add the connector?**
No. Copy the Informatica directory to the appropriate plugins folder and restart the listed services. The connector is loaded automatically on service startup without an OpCon reinstall.

**How do I know if the installation was successful?**
After the services restart, open Solution Manager. If the connector installed correctly, **Informatica** appears as an available agent type when adding a new agent.

**What should I do if the connector does not appear in Solution Manager after restart?**
Verify that the Informatica directory was copied to the correct plugins folder for your environment (`\SAM\plugins` for on-premises, `\Relay\plugins` for cloud). Confirm that all required services were restarted and check the service logs for errors.

## Glossary

**ACS connector** — A packaged integration deployed as a DLL into the OpCon plugins folder. The connector is loaded at service startup and does not require a separate agent installation.

**SAM plugins folder** — The directory (`\SAM\plugins`) where connectors are installed for on-premises OpCon deployments.

**SmaRelay** — The relay service used in cloud deployments to bridge on-premises resources with OpCon Cloud. Connectors for cloud customers are installed in the `\Relay\plugins` folder.

**Related topics:**

- [Informatica On-Prem ACS overview](./overview.md)
- [Define an Informatica connection and jobs](./InformaticaOperation.md)
