### Satellite Network

![LOGO](https://cdn.discordapp.com/attachments/916393114166525974/1072802092403662888/SATELLITE_NETWORK.png)

##### General

A Satellite Network is a wireless connection between machines that require a common network connection.

##### The principle of operation

Machines are needed to provide the network:

- [Space Satellite](#/machines#spacesatellite)
- [Communication Tower](#/machines#communicationtower)

Satellite Network operation diagram:

![IMG](https://cdn.discordapp.com/attachments/916393114166525974/1072803765490561094/SATELLITE_NETWORK.png)

To create an isolated network, you will need the **Laptop** tool, with which you need to create a **security key** (it is advisable to write it somewhere so as not to lose it).

![BIG](https://i.imgur.com/j3iqs8S.gif)

Install a **Space satellite** in the orbit of the planet. Next, you will need to set the frequency to the satellite, via **Communication Transmitter**.

![BIG](https://raw.githubusercontent.com/GT-IMPACT/impact-front/main/public/media/gregtech/connectSattelite.gif)

Attention! The security key will be recorded in the satellite data when the frequency is first set.
Now if the **Laptop** security key matches the satellite key, you will be able to change the satellite frequency, otherwise you will need to break and re-install the **Communication Transmitter**

Important! If you break the Communication Transmitter, all connections will be cut off.

Install a **Communication tower** on the planet. Next, you will need to configure the tower to the satellite frequency, via **Communication Receiver**.

![BIG](https://i.imgur.com/pF4Vt20.gif)

After connecting all x4 Communication Transmitter, you need to start the tower and make sure that a successful connection has occurred.

![BIG](https://i.imgur.com/7cY69E1.gif)

Now the tower will search for machines that can work with the satellite network. The radius of the tower is 8 chunks.

As soon as the machine is detected, it will be added to the tower system.

The tower scans the territory once every 30 seconds. When the machine connected to the network is removed, a forced scan of the territory is performed.

##### Conditions of the machines

If there is no network connection between the tower-satellite or tower-machine pair, the machine will stop working based on the requirements of connecting to satellite network.
