# Set environment

## Install platform IO cli

`export PATH=$PATH:~/.platformio/penv/bin`

```cpp
printf("Restarting now.\n");
fflush(stdout);
esp_restart();
```

`IDF_PATH=~/.platformio/packages/framework-espidf/`

You may have to add pyserial:
`sudo pip3 install pyserial`

Read device info:
`python3 $IDF_PATH/components/esptool_py/esptool/esptool.py --port /dev/cu.usbserial-A5XK3RJT flash_id`

Read partition table

`python3 $IDF_PATH/components/esptool_py/esptool/esptool.py --port /dev/cu.usbserial-A5XK3RJT read_flash 0x8000 0xc00 ptable.img`

We can now check the content of the `ptable.img` file
`python3 $IDF_PATH/components/partition_table/gen_esp32part.py ptable.img`

Here is an example of the result:

```bash
# Espressif ESP32 Partition Table
# Name, Type, SubType, Offset, Size, Flags
nvs,data,nvs,0x9000,20K,
otadata,data,ota,0xe000,8K,
app0,app,ota_0,0x10000,1280K,
app1,app,ota_1,0x150000,1280K,
spiffs,data,spiffs,0x290000,1472K,
```

## Mac OS - OsX

You may encounter a problem uploading the file to ESP32 that uses the new chip USB/UART CH9102x.

`A fatal error occurred: Failed to write to target RAM (result was 01070000)`

You may find more information about solving this problem at:

https://blog.squix.org/2021/08/ch9102-driver-issues-failed-to-write-to-target-ram.html

It is related to those issues:

- https://github.com/espressif/esptool/issues/280
- https://github.com/Xinyuan-LilyGO/LilyGo-T-Call-SIM800/issues/139

This driver may help on Big Sur b tu fails for the last Monterey version [CH9102_Mac_Driver.zip](CH9102_Mac_Driver.zip)

Code: https://github.com/WCHSoftGroup/ch34xser_macos

On M1 we may have to explicitely accept kext (kernel extensions): https://support.apple.com/guide/security/kernel-extensions-sec8e454101b/1/web/1#sec8697bc589

## FS

Create a folder at the first level called `data`.

To upload the data

`pio run --target uploadfs`

## Alternative web server

https://github.com/me-no-dev/ESPAsyncWebServer#using-platformio

## Searching libraries

https://platformio.org/lib/search?query=si7021

## OTA

pio run -t upload --upload-port square.local
pio run -t uploadfs --upload-port square.local
