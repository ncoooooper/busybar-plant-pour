# Plant Pour

Log measured watering by plant and see what remains of each weekly volume target.

Several people can water the same plant during the week. The bar keeps the measured pours together, so the next person can see what has already gone into that pot.

## Log water for one plant

1. Set your own plant names and weekly targets in milliliters, for example `Basil|400,Mint|350`. Turn the wheel to the plant you are watering.
2. Check the next pour size on the rear. Press **Start** after measuring and adding that amount.
3. Read what remains for the week. In the clip basil goes from 400 mL remaining to 280 mL after a 120 mL pour.

![Basil’s remaining volume drops from 400 mL to 280 mL.](media/guide/log-basil-pour.gif)

## Measure a different pour for mint

1. Turn to **Mint**. Click to edit the next pour and turn the wheel to adjust in 10 mL steps.
2. Click to finish editing, then press **Start** to record the measured amount. The recording increases the pour from 120 to 130 mL.
3. Return to basil to see its own balance. Hold the wheel if the most recent pour this week needs to be undone.

![Mint’s pour changes to 130 mL and its weekly balance falls to 220 mL before Basil reappears.](media/guide/change-mint-pour.gif)

## Example from the emulator

The two sample totals are independent. Basil has 400 − 120 = 280 mL left, while mint has 350 − 130 = 220 mL. Totals start again with the local week on Monday. Targets are entered by the grower for each plant.

## Run in the emulator

Open BUSY Bar Emulator. From this repository, run:

```sh
~/.busy-emulator/bin/busy-emulator dev --once
```

Press **Back** to exit.

The GIFs are excerpts from the emulator recording. Each front-display pixel is shown at 9× its original width and height. The end frames pause for reading.

[Full recording](media/controls.mp4) · [Rear display](screenshots/back-1.png) · [Firmware test](EMULATOR-QA.md) · [MIT license](LICENSE)

## Device settings

Open **Apps → Plant Pour → Setup**. Save the fields and reopen the app to use the new values.

- **Plant and weekly target in mL** (`plants`). Default: `Basil|400,Mint|350,Ivy|200`.
