# Range & Rain

## 🎯 Artillery Calculator for Hell Let Loose

**Range & Rain** is an artillery calculator designed for the game *Hell Let Loose*. It helps artillery players quickly determine the correct elevation settings for precise fire across all factions.

## ⚡ Features

- Supports **US, German, and Soviet** artillery pieces
- Calculates **angle settings** based on distance
- Provides **pre-mapped range tables** per faction
- Adjusts for **elevation differences**
- Easy-to-use interface for quick calculations in battle

## 🔥 How It Works

Hell Let Loose artillery follows basic projectile motion physics. This calculator uses:

\[ R = (v_0^2 \times \sin(2\theta)) / g \]

Where:
- **R** = Range (meters)
- **v₀** = Muzzle velocity (varies by faction)
- **θ** = Firing angle (set on artillery piece)
- **g** = Gravity (~9.81 m/s²)

By inputting your target’s range, *Range & Rain* calculates the necessary angle for your shot.

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Paul-Lecomte/RangeAndRain.git
   cd range-and-rain
   ```
2. Install dependencies (if applicable):
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

## 🎮 Usage

1. Select your **faction** (US, German, Soviet).
2. Enter the **distance to target** (in meters).
3. Receive the **optimal artillery elevation setting**.
4. Fire and adjust based on impact.

## 🗺️ Supported Artillery
| Faction  | Artillery Piece          |
|----------|--------------------------|
| US       | M114 155mm Howitzer      |
| Germany  | leFH 18 105mm Howitzer   |
| Soviet   | M-30 122mm Howitzer      |

## 📌 Roadmap
- [x] elevation support for the Axis / Ally faction
- [x] elevation support for the Soviet faction
- [ ] Implement a visual trajectory preview
- [ ] Add an API for in-game integration
- [ ] Mobile-friendly version

## 🤝 Contributing
Pull requests are welcome! If you have a better range table or improvements, feel free to contribute.

## ⚖️ License
This project is open-source under the [MIT License](LICENSE).

## 📧 Contact
For questions or suggestions, reach out via [GitHub Issues](https://github.com/Paul-Lecomte/RangeAndRain/issues).