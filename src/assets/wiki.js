const machines = [
  {
    "id": 0,
    "mod": "impact-core",
    "pages": [
      {
        "id": 0,
        "tier": "steam",
        "name": "COKE OVEN",
        "img": "media/gregtech/cokeoven.png",
        "desc": "This machine is designed for the production of charcoal / coke coal and creosote in the early stages.",
        "general": "The oven carries out recipes that can be seen at NEI.",
        "other": [
          {
            "title": "",
            "desc": [
              {"p": "This machine has no unusual mechanics. An important note — all recipes are completed in the same time: 90 seconds.",},
            ],
            "img": []
          }
        ]
      }, {
        "id": 1,
        "tier": "steam",
        "name": "PRIMITIVE WATER PUMP",
        "img": "media/gregtech/primwaterpump.png",
        "desc": "Designed to generate water at the initial stages and in hard-to-reach places without power supply.",
        "general": "The machine generates water without electricity depending on the biome in which the controller is located.",
        "other": [
          {
            "title": "Water generation coefficient",
            "desc": [
              {"p": "Water generation coefficient = h. The ratio is changed using Output Hatch:"},
              {"p": "— Pump Output Hatch: h = 1"},
              {"p": "— ULV Output Hatch: h = 2"},
              {"p": "— LV Output Hatch: h = 3"},
            ],
            "img": []
          }
        ]
      }, {
        "id": 2,
        "tier": "ulv",
        "name": "SAW MILL",
        "img": "media/gregtech/sawmill.png",
        "desc": "Designed for woodworking, since all \"other\" woodworking mechanics are disabled (except hand tools), you will need this machine for processing.",
        "general": "The machine has 3 operating modes. Modes are switched using Screwdriver.",
        "other": [
          {
            "title": "Mode 1. Planks & Sawdust:",
            "desc": [
              {"p": "This mode allows you to get boards and sawdust from logs, if you have an Output Bus ULV of the shooting range, you will only get boards at the output."},
            ],
            "img": []
          }, {
            "title": "Mode 2. Wood Pulp & Sawdust:",
            "desc": [
              {"p": "This mode allows you to get wood pulp and sawdust from logs with water, if you have an Output Bus ULV of the range, you will only get wood pulp at the output.",},
            ],
            "img": []
          }, {
            "title": "Mode 3. Only Sawdust:",
            "desc": [
              {"p": "This mode allows you to get only sawdust from the logs.",},
            ],
            "img": []
          }
        ]
      }, {
        "id": 3,
        "tier": "lv",
        "name": "PYROLYSE OVEN",
        "img": "media/gregtech/purolyse.png",
        "desc": "The principle of operation of a pyrolysis oven is based on the thermal decomposition of organic substances into pyrolysis gases and solid residues.",
        "general": "The machine has a unique mechanics — product output during operation.",
        "other": [
          {
            "title": "Principle of operation",
            "desc": [
              {"p": "During («Time») of the recipe, gases and solid fuels are released:"},
              {"p": "— At 7 seconds — Carbon Monoxide (72L)"},
              {"p": "— At 14 seconds — Hydrogen Gas (288L)"},
              {"p": "— At 21 seconds — Methane Gas (144L)"},
              {"p": "— At 28 seconds — CO2 Gas (216L)"},
              {"p": "— At 35 seconds — Wood Tar (1440L) and Charcoal (x5)"},
            ],
            "img": []
          },
        ]
      }, {
        "id": 4,
        "tier": "ev",
        "name": "ADVANCED PYROLYSE OVEN",
        "img": "media/gregtech/AdvPyrolyse.png",
        "desc": "The principle of operation of a pyrolysis oven is based on the thermal decomposition of organic substances into pyrolysis gases and solid residues.",
        "general": "The advanced Pyrolysis Oven differs from the conventional Pyrolysis Oven in that it is parallel (several recipes are executed at the same time).",
        "other": [
          {
            "title": "Principle of operation",
            "desc": [
              {"p": "Principle of operation: During («Time») of the recipe, gases and solid fuels are released:"},
              {"p": "— At 7 seconds — Carbon Monoxide (72L)"},
              {"p": "— At 14 seconds — Hydrogen Gas (288L)"},
              {"p": "— At 21 seconds — Methane Gas (144L)"},
              {"p": "— At 28 seconds — CO2 Gas (216L)"},
              {"p": "— At 35 seconds — Wood Tar (1440L) and Charcoal (x5)"},
            ],
            "img": []
          }, {
            "title": "Important!",
            "desc": [
              {"p": "The machine, depending on the \"tier\" Energy Hatch, performs several recipes at a time (LV — 2x, MV — 4x, HV — 6x .. \"tier\" * 2)"},
            ],
            "img": []
          }, {
            "title": "Energy consumption",
            "desc": [
              {"p": "EU / t = EU / t (prescription) * number of concurrent recipes * Energy Hatch \"tier\" / 2"},
            ],
            "img": []
          },
        ]
      }, {
        "id": 5,
        "tier": "mv",
        "name": "ELECTRIC WATER DRILLING RIG",
        "img": "media/gregtech/ElWater.png",
        "desc": "Designed for pumping water from bedrock using electricity.",
        "general": "The machine pumps out water from bedrock using electricity, depending on the biome in which the controller is located, and Energy Hatch and Output Hatch range.",
        "other": [
          {
            "title": "Water generation coefficient",
            "desc": [
              {"p": "Water generation coefficient = h. The coefficient is changed using the Energy Hatch and Output Hatch \"tier\"."},
            ],
            "img": []
          }, {
            "title": "Biome Coefficient",
            "desc": [
              {"p": "Biome coefficient = b. The coefficient is changed depending on the biome the controller is located in:"},
              {"p": "— Ocean, River: b = 1000 L/s"},
              {"p": "— Swampland: b = 800 L/s"},
              {"p": "— Jungle: b = 350 L/s"},
              {"p": "— Snow, Iceland: b = 300 L/s"},
              {"p": "— Plains, Forest: b = 250 L/s"},
              {"p": "— Taiga: b = 175 L/s"},
              {"p": "— Beach: b = 170 L/s"},
              {"p": "— \"other\": b = 100 L/s"},
            ],
            "img": []
          }, {
            "title": "Water generation",
            "desc": [
              {"p": "Water is generated according to the following formula:"},
              {"p": "Water generation (L/s) = (1 * 2 ^ h) * 2 * b * 20"},
            ],
            "img": []
          },
        ]
      }, {
        "id": 6,
        "tier": "hv",
        "name": "SPACE SATELLITE",
        "img": "media/gregtech/SpaceSatellite.png",
        "desc": "The Space Satellite allows for wireless communication between machines on earth.",
        "general": "— Need a Communication Tower",
        "other": [
          {
            "title": "Principle of operation",
            "desc": [
              {"p": "After installing the Space Satellite, you must tune the frequency using your Laptop."},
              {"p": "Communication Transmitter is used for frequency setting."},
            ],
            "img": []
          }, {
            "title": "Important!",
            "desc": [
              {"p": "One satellite is enough for the game."},
              {"p": "The satellite does not require electrical power."},
            ],
            "img": []
          }, {
            "title": "",
            "desc": [
              {"p": "Setting the frequency for the Space Satellite"},
            ],
            "img": [{
              "img": "media/gregtech/connectSattelite.gif"
            }]
          },
        ]
      }, {
        "id": 7,
        "tier": "ev",
        "name": "COMMUNICATION TOWER",
        "img": "media/gregtech/ParTower.png",
        "desc": "The Communication Tower allows wireless communication between the satellite in orbit and machines on the «Earth».",
        "general": "— Need a Space Satellite",
        "other": [
          {
            "title": "Principle of operation",
            "desc": [
              {"p": "After installing the Space Satellite, you must tune the frequency using your Laptop."},
              {"p": " "},
              {"p": "Communication Receiver is used to configure the connection. The frequency must match the satellite frequency. To establish communication, you need to connect all 4 receivers."},
            ],
            "img": []
          }, {
            "title": "Important!",
            "desc": [
              {"p": "The tower has a radius of operation — 256 blocks, it is counted from the controller."},
              {"p": "Several towers can be connected to one frequency — the satellite frequency."},
              {"p": "The tower does not require electrical power."},
              {"p": ""},
              {"p": "Setting the frequency for connecting the Communication Tower to the satellite"}
            ],
            "img": [{"img": "media/gregtech/connectTowerSattelite.gif"}]
          },
        ]
      }, {
        "id": 8,
        "tier": "ev",
        "name": "NUCLEAR REACTOR",
        "img": "media/gregtech/NuclearReactor.png",
        "desc": "There are 3 tiers of the reactor, they differ in structure and the amount of rods (1, 9 or 25). " +
          "Designed for the generation of conventional / superheated steam and for the extraction of radioactive resources.",
        "general": "The nuclear reactor has 2 modes of operation, Default Mode and Fast Decay Mode. Each mode includes 2 types of fuel: regular rods and MOX rods.",
        "other": [
          {
            "title": "Default Mode",
            "desc": [
              {"p": "Regular rods generate steam. MOX rods generate superheated steam, but it is important that all the rods in the reactor are MOX, otherwise the regime will remain as with regular rods."},
            ],
            "img": []
          }, {
            "title": "Fast Decay Mode",
            "desc": [
              {"p": "This mode allows the rapid decay of nuclear fuel. Fuel decay occurs 5 times faster than the Default mode. In this mode, the reactor consumes Coolant and produces Hot Coolant."},
            ],
            "img": []
          }, {
            "title": "Reactor control",
            "desc": [
              {"p": "1. Current mode of the reactor."},
              {"p": "2. Input / Output fluids."},
              {"p": "3. MOX fuel indicator."},
              {"p": "4. Temperature indicator."},
              {"p": "5. Up the level of all rods completely."},
              {"p": "6. Up / Down the level for all rods by 10%."},
              {"p": ""},
              {"p": "Reactor control"},
            ],
            "img": [{
              "img": "media/gregtech/NuclearGui.png"
            }]
          }, {
            "title": "Rod control",
            "desc": [
              {"p": "1. Up / Down the level for all rods by 10%."},
              {"p": "2. Fuel slot."},
              {"p": "3. Rod level indicator."},
              {"p": "4. If you visit the fuel, the duration of the fuel burning is subtracted in proportion to the level of the rod."},
              {"p": ""},
              {"p": "Rod control"},
            ],
            "img": [{
              "img": "media/gregtech/NuclearHatch.png"
            }]
          },
        ]
      }, {
        "id": 9,
        "tier": "iv",
        "name": "PARALLEL SUPER COMPUTER",
        "img": "media/gregtech/ParComputer.png",
        "desc": "The supercomputer allows parallels to be distributed to Impact machines.",
        "general": "— Need a Space Satellite",
        "other": [
          {
            "title": "",
            "desc": [
              {"p": "— Need a Communication Tower"},
              {"p": ""},
              {"p": "The computer stores Parallel Point (PP), with the possibility of increasing or spending them. Points are needed to distribute parallels to machines, each machine is limited by the number of parallels: 4, 16, 64, 256."},
              {"p": ""},
              {"p": "What is parallelism? Parallelism is the ability to simultaneously perform the same type of action in several threads."},
              {"p": ""},
              {"p": "If we consider parallels in the game, then this is the execution of one type of recipe several times at one time (while the energy consumption is proportional to the number of recipes being executed)."},
              {"p": ""},
              {"p": "The structure of the computer can change (in length), the maximum length is 16 blocks, the minimum is 2."},
            ],
            "img": []
          }, {
            "title": "Principle of operation",
            "desc": [
              {"p": "After installing the communication tower, it is necessary to tune the frequency with which the tower, computer and machines will worked. Are tuned through the laptop."},
              {"p": ""},
              {"p": "There is a Computer Rack to control the points of parallels. The Computer Rack has 4 slots that fit the Parallel CPU. There are 4 types of processors that produce: 4, 16, 64, 256 PP."},
              {"p": ""},
              {"p": "Parallel Transmitter is used to transmit parallelism. Parallel Transmitter there are 4 tiers that transmit: 4, 16, 64, 256 PP. When installing the transmitter, the computer will immediately reserve the required amount of PP for the transmitter to work."},
              {"p": ""},
              {"p": "To transfer the PP to the machine you need, you need to install the Parallel Receiver in it. Next, click on the Parallel Receiver using your laptop and then click on the Parallel Transmitter on your computer."},
              {"p": "If the receiver / transmitter is lit red — there is a connection error or there is no connection, if it is lit yellow — a successful connection."},
            ],
            "img": []
          }, {
            "title": "Important!",
            "desc": [
              {"p": "The power consumption of a computer is calculated using the following formula:"},
              {"p": "Consumption (EU/t) = 8192 + Max PP."},
              {"p": "Max PP — the total amount of PP from the Parallel Processors installed in the computer."},
              {"p": ""},
              {"p": "Setting the frequency for connecting the Computer to the Communication Tower"},
            ],
            "img": [{"img": "media/gregtech/connectTowerComp.gif"}]
          }, {
            "title": "",
            "desc": [
              {"p": "Parallel Processors in a Computer Rack"},
            ],
            "img": [{"img": "media/gregtech/ComputerRackGUI.png"}]
          }, {
            "title": "",
            "desc": [
              {"p": "Setting up the transmit of PP from the computer to the machine"},
            ],
            "img": [{"img": "media/gregtech/connectMachineComp.gif"}]
          },
        ]
      }, {
        "id": 10,
        "tier": "iv",
        "name": "Lapotronic Supercapacitor",
        "img": "media/gregtech/LSC.png",
        "desc": "Механизм позволяет хранить огромное количество энергии.",
        "general": "Не имеет потерь и не требует ничего для работы.",
        "other": [{
          "title": "Важно!",
          "desc": [
            {"p": "Теряет заряд при демонтаже блока-контроллера."},
            {"p": ""},
            {"p": "Может иметь высоту от 2 до 15 блоков (не считая 2 блока основания)."},
            {"p": ""},
            {"p": "Имеет поддержку Energy Detector Cover. На блоке контроллера должен быть в режиме Normal Universal Storage."},
          ],
          "img": []
        }, {
          "title": "Особенности конструкции",
          "desc": [
            {
              "p": "Внутри оболочки из специального стекла (I-Glass) должны располагаться различные блоки-энергоносители " +
                "(Energium / Lapotronic / Mysterious Crystal Capacitor). Можно комбинировать энергоносители различных уровней. " +
                "Количество энергоносителей должно быть кратно 9, т.е. нельзя оставлять пустые места."
            },
            {"p": ""},
            {"p": "Снизу можно размещать Energy и Dynamo Hatch разных уровней."},

          ],
          "img": []
        },]
      }, {
        "id": 11,
        "tier": "iv",
        "name": "Multi PBE Machine",
        "img": "media/gregtech/ParBPE.png",
        "desc": "Машина является многоблочным аналогом Extruder, Bender и Forming Press. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Имеет три режима работы. Режимы переключаются отврёткой. Может работать со множеством форм(схем)," +
          " находящимися в разных басах в режиме \"Buses separated on\" (переключается отвёрткой при зажатой клавише Shift). " +
          "Рецепт выполняется с той формой (схемой), которая находится в том же басе, что и материал",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {"p": "- Нужен Parallel Super Computer"},
              {"p": ""},
              {"p": "- Нужена Communication Tower"},
            ],
            "img": []
          }, {
            "title": "",
            "desc": [
              {"p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."},
              {"p": ""},
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии " +
                  "пропорционален количеству выполняемых рецептов)."
              },
              {"p": ""},
              {"p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."},
              {"p": ""},
              {"p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"},
              {"p": ""},
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере." +
                  "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              },
            ],
            "img": []
          }, {
            "title": "Режим 1. Extruder",
            "desc": [
              {"p": "Выполняет все рецепты одноблочного аналога."},
            ],
            "img": []
          }, {
            "title": "Режим 2. Bender",
            "desc": [
              {"p": "Выполняет все рецепты одноблочного аналога."},
            ],
            "img": []
          }, {
            "title": "Режим 3. Forming Press",
            "desc": [
              {"p": "Выполняет все рецепты одноблочного аналога."},
              {
                "p": "Может автоматически переименовывать предметы при помощи Mold (\"name\") переименованного в то название, " +
                  "которое будет дано предмету (Форму можно переименовать при помощи Tool Forge без расхода уровня). " +
                  "Работает только если в басе с этой формой лежит не более 1 стака предметов."
              },
            ],
            "img": []
          }, {
            "title": "Структура",
            "desc": [
              {
                "p": "Механизм имеет геометрические размеры 5х3х3 длинна, ширина, высота соответственно. " +
                  "Обязательными блоками помимо контроллера являются Muffler Hatch, Maintenance Hatch, Energy Hatch. " +
                  "Таким образом без учёта инпут, аутпут бассов, Parallel Receiver для постройки необходим 41 структурный блок PBE Casing."
              },
            ],
            "img": []
          },
        ]
      }, {
        "id": 12,
        "tier": "iv",
        "name": "Multi Laser Engraver",
        "img": "media/gregtech/ParLaser.png",
        "desc": "Машина является многоблочным аналогом Laser Engraver. Может работать с многоамперными Energy Hatch и параллельностью",
        "general": "Выполняет все рецепты одноблочного аналога. Режимы переключаются отвёрткой. Может работать со множеством линз (схем), " +
          "находящимися в разных басах в режиме \"Buses separated on\" (переключается отвёрткой при зажатой клавише Shift). " +
          "Рецепт выполняется с той линзой (схемой), которая находится в том же басе, что и материал.",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {"p": "- Нужен Parallel Super Computer"},
              {"p": ""},
              {"p": "- Нужена Communication Tower"},
            ],
            "img": []
          }, {
            "title": "",
            "desc": [
              {"p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."},
              {"p": ""},
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии " +
                  "пропорционален количеству выполняемых рецептов)."
              },
              {"p": ""},
              {"p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."},
              {"p": ""},
              {"p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"},
              {"p": ""},
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере." +
                  "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              },
            ],
            "img": []
          }, {
            "title": "Важно!",
            "desc": [
              {
                "p": "Не игнорирует требование \"Needs Cleanroom\"."
              },
            ],
            "img": []
          }, {
            "title": "Структура",
            "desc": [
              {
                "p": "Механизм имеет геометрические размеры 5х3х5 длина, ширина, высота соответственно. " +
                  "Обязательными блоками помимо контроллера являются Maintenance Hatch, Energy Hatch. " +
                  "Для постройки необходимо (без учета хэтчей) 36 Engraver Casing, 10 I-glass (1 белое, 3 красных, 3 зеленых, 3 синих)." +
                  " Цвета стекла фиксированы и не могут быть изменены."
              },
            ],
            "img": []
          }
        ]
      },
      {
        "id": 13,
        "tier": "iv",
        "name": "Multi Assembling Machine",
        "img": "media/gregtech/ParAssembler.png",
        "desc": "Машина является многоблочным аналогом Assembler, Circuit Assembler, Component Assembler. Имеет параллельность.",
        "general": "Имеет три режима работы. Режимы переключаются отврёткой. Может работать со множеством схем, " +
          "находящимися в разных басах в режиме \"Buses separated on\" (переключается отвёрткой при зажатой клавише Shift)." +
          " Рецепт выполняется с той схемой, которая находится в том же басе, что и материал",
        "other": [{
          "title": "Параллелизм",
          "desc": [
            {"p": "- Нужен Parallel Super Computer"},
            {"p": ""},
            {"p": "- Нужена Communication Tower"},
          ],
          "img": []
        }, {
          "title": "",
          "desc": [
            {"p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."},
            {"p": ""},
            {
              "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии " +
                "пропорционален количеству выполняемых рецептов)."
            },
            {"p": ""},
            {"p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."},
            {"p": ""},
            {"p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"},
            {"p": ""},
            {
              "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере." +
                "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
            },
          ],
          "img": []
        }, {
          "title": "Важно!",
          "desc": [
            {"p": "Не игнорирует требование \"Needs Cleanroom\"."},
          ],
          "img": []
        }, {
          "title": "Режим 1. Assembler",
          "desc": [
            {"p": "Выполняет все рецепты одноблочного аналога."},
          ],
          "img": []
        }, {
          "title": "Режим 2. Circuit Assembler",
          "desc": [
            {"p": "Выполняет все рецепты одноблочного аналога."},
          ],
          "img": []
        }, {
          "title": "Режим 3. Component Assembler",
          "desc": [
            {"p": "Выполняет все рецепты одноблочного аналога."},
          ],
          "img": []
        }, {
          "title": "Структура",
          "desc": [
            {
              "p": "Механизм имеет геометрические размеры 3х9х3 длина, ширина, высота соответственно. " +
                "Обязательными блоками помимо контроллера являются Maintenance Hatch, Energy Hatch. " +
                "Таким образом без учёта инпут, аутпут бассов, Parallel Receiver для постройки необходимо" +
                " 59 Assembler Casing, 9 I-glass любого цвета."
            },
          ],
          "img": []
        },]
      }, {
        "id": 14,
        "tier": "iv",
        "name": "MULTI CENTRIFUGE",
        "img": "media/gregtech/ParCentrifuge.png",
        "desc": "Машина является аналогом Multiblock Centrifuge и Thermal Centrifuge. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Имеет два режима работы. Режимы переключаются отвёрткой. ",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 1. Centrifuge",
            "desc": [
              {
                "p": "Выполняет все рецепты аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 2. Thermal Centrifuge",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Цвет I-Glass в структуре не имеет значения. "
              }
            ],
            "img": []
          },
          {
            "title": "Важно!",
            "desc": [
              {
                "p": "Рецепты с капсулами выполняются путём заливания соответствующей жидкости в Input Hatch."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 15,
        "tier": "iv",
        "name": "MULTI ELECTROLYZER",
        "img": "media/gregtech/ParElectr.png",
        "desc": "Машина является аналогом Multiblock Electrolyzer. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Выполняет все рецепты аналога.",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Цвет I-Glass в структуре не имеет значения. "
              }
            ],
            "img": []
          },
          {
            "title": "Важно!",
            "desc": [
              {
                "p": "Рецепты с капсулами выполняются путём заливания соответствующей жидкости в Input Hatch."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 16,
        "tier": "iv",
        "name": "MULTI WIRE FACTORY",
        "img": "media/gregtech/ParWire.png",
        "desc": "Машина является аналогом Wiremill и Wire Assembler. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Имеет два режима работы. Режимы переключаются отвёрткой. Может работать со множеством схем, находящихся в разных басах в режиме \"Buses separated on\" (переключается отвёрткой при зажатой клавише Shift). Рецепт выполняется с той схемой, которая находится в том же басе, что и материал.",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 1. Wiremill",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 2. Wire Assembler",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Цвет I-Glass в структуре не имеет значения. "
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 17,
        "tier": "iv",
        "name": "MULTI SUPPLY PRODUCTION",
        "img": "media/gregtech/ParSupply.png",
        "desc": "Машина является аналогом Autoclave, Dust Washer, Ore Washing Plant и Chemical Bath. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Имеет четыре режима работы. Режимы переключаются отвёрткой.",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 1. Autoclave",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 2. Dust Washer",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 3. Ore Washer",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 4. Chemical Bath",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Цвет I-Glass в структуре не имеет значения. "
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 18,
        "tier": "iv",
        "name": "MULTI UTILITY MACHINE",
        "img": "media/gregtech/ParUtill.png",
        "desc": "Машина является аналогом Compressor, Extractor, Canning Machine, Packager, Recycler, Forge Hammer, Lathe, Polarizer. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Имеет восемь режимов работы. Режимы переключаются отвёрткой. Может работать со множеством схем, находящихся в разных басах в режиме \"Buses separated on\" (переключается отвёрткой при зажатой клавише Shift). Рецепт выполняется с той схемой, которая находится в том же басе, что и материал.",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 1. Compressor",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 2. Extractor",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 3. Canning Machine",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 4. Packager",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 5. Recycler",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 6. Hammer",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 7. Lathe",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 8. Polarizer",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Цвет I-Glass в структуре не имеет значения. "
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 19,
        "tier": "iv",
        "name": "MULTI BREWMENTER",
        "img": "media/gregtech/ParBrew.png",
        "desc": "Машина является аналогом Brewery и Fermenter. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Имеет два режима работы. Режимы переключаются отвёрткой.",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 1. Brewery",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 2. Fermenter",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Цвет I-Glass в структуре не имеет значения."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 20,
        "tier": "iv",
        "name": "MULTI ARC FURNACE",
        "img": "media/gregtech/ParArc.png",
        "desc": "Машина является аналогом Arc Furnace и Alloy Smelter. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Имеет два режима работы. Режимы переключаются отвёрткой. Может работать со множеством схем, находящихся в разных басах в режиме \\\"Buses separated on\\\" (переключается отвёрткой при зажатой клавише Shift). Рецепт выполняется с той схемой, которая находится в том же басе, что и материал. ",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 1. Arc Furnace",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 2. Alloy Smelter",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 21,
        "tier": "iv",
        "name": "MULTI CUTTING MACHINE",
        "img": "media/gregtech/ParCutt.png",
        "desc": "Машина является аналогом Cutting Machine и Saw Mill. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Имеет четыре режима работы. Режимы переключаются отвёрткой. ",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 1. Cutting Machine",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 2. Saw Mill: Planks \u0026 Sawdust",
            "desc": [
              {
                "p": "Выполняет все рецепты примитивного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 3. Saw Mill: Only Sawdust",
            "desc": [
              {
                "p": "Выполняет все рецепты примитивного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 4. Saw Mill: Wood Pulp \u0026 Sawdust",
            "desc": [
              {
                "p": "Выполняет все рецепты примитивного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Цвет I-Glass в структуре не имеет значения."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 22,
        "tier": "iv",
        "name": "MULTI EXTRADIFICATION",
        "img": "media/gregtech/ParExtraDi.png",
        "desc": "Машина является аналогом Fluid Extractor, Fluid Solidifier и Fluid Heater. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Имеет три режима работы. Режимы переключаются отвёрткой. ",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 1. Fluid Extractor",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 2. Fluid Solidifier",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 3. Fluid Heater",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Цвет I-Glass в структуре не имеет значения."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 23,
        "tier": "iv",
        "name": "MULTI MACERATION STACK",
        "img": "media/gregtech/ParMacer.png",
        "desc": "Машина является аналогом Macerator. Может работать с многоамперными Energy Hatch и параллельностью. ",
        "general": "Выполняет все рецепты одноблочного аналога.",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          }
        ]
      },
      {
        "id": 24,
        "tier": "iv",
        "name": "MULTI MIXING MACHINE",
        "img": "media/gregtech/ParMix.png",
        "desc": "Машина является многоблочным аналогом Mixer. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Выполняет все рецепты одноблочного аналога. Режимы переключаются отвёрткой. Может работать со множеством схем, находящихся в разных басах в режиме \"Buses separated on\" (переключается отвёрткой при зажатой клавише Shift). Рецепт выполняется с той схемой, которая находится в том же басе, что и материал.",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Важно!",
            "desc": [
              {
                "p": "Рецепты с капсулами выполняются путём заливания соответствующей жидкости в Input Hatch."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 25,
        "tier": "iv",
        "name": "MULTI SIFTARATION UNIT",
        "img": "media/gregtech/ParSift.png",
        "desc": "Машина является аналогом Electromagnetic Separator и Sifting Machine. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Имеет два режима работы. Режимы переключаются отвёрткой. ",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 1. Electromagnetic Separator",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          },
          {
            "title": "Режим 2. Sifter",
            "desc": [
              {
                "p": "Выполняет все рецепты одноблочного аналога."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 26,
        "tier": "ev",
        "name": "FREEZER SOLIDIFIER",
        "img": "media/gregtech/ParFrezSolid.png",
        "desc": "Машина нужна для охлаждения в слитки сплавов, полученных в жидком виде в доменном сплавщике (Blast Smelter). Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "В процессе работы холодильник-отливщик потребляет хладагент (IC2 Coolant).",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          }
        ]
      },
      {
        "id": 27,
        "tier": "ev",
        "name": "BLAST SMELTER",
        "img": "media/gregtech/BlastSmelter.png",
        "desc": "Механизм позволяет получать сплавы в жидком виде из множества твердых компонентов на входе. Может работать с многоамперными Energy Hatch. ",
        "general": "Доменный сплавщик может работать со множеством программных схем, находящимися в разных Input Bus. Рецепт выполняется с той схемой, которая находится в том же Input Bus, что и материалы.",
        "other": [
          {
            "title": "",
            "desc": [
              {
                "p": "Также доменный сплавщик имеет механики, аналогичные таковым у электрической доменной печи (Electric Blast Furnace):"
              },
              {
                "p": ""
              },
              {
                "p": "1. Каждые 900 К температуры катушек выше минимально необходимой для операции уменьшают энергопотребление на 5%."
              },
              {
                "p": ""
              },
              {
                "p": "2. Каждые 1800 К температуры катушек выше минимально необходимой для операции позволяют поднять уровень необходимого Energy Hatch без потери эффективности (время сокращается в 4 раза)."
              },
              {
                "p": ""
              },
              {
                "p": "3. Повышение уровня Energy Hatch, начиная с HV, увеличивает температуру катушек доменного сплавщика на 100 К. То есть dT\u003d100*(tier-2)."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности конструкции",
            "desc": [
              {
                "p": "Имеет в конструкции 24 нагревательные катушки (Heating Coil), те же, что используются и в электрической доменной печи. Комбинировать разные катушки нельзя."
              }
            ],
            "img": []
          }
        ]
      },
      {
        "id": 28,
        "tier": "zpm",
        "name": "ADVANCED VACUUM FREEZER",
        "img": "media/gregtech/ParFreez.png",
        "desc": "Машина является улучшенной версией обычного вакуумного холодильника (Vacuum Freezer). Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "В процессе работы потребляет 50 л/с супер-хладагента (Super Coolant), выдавая 25 л/с горячего хладагента (Hot Coolant).",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности конструкции",
            "desc": [
              {
                "p": "При постройке внутрь холодильника необходимо залить 7 ведер хладагента (IC2 Coolant). "
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 29,
        "tier": "lv",
        "name": "RAIL ASSEMBLER",
        "img": "media/gregtech/RailAssembler.png",
        "desc": "Машина нужна для производства железнодорожных путей. Может работать с многоамперными Energy Hatch.",
        "general": "Может работать со множеством схем, находящихся в разных басах. Рецепт выполняется с той схемой, которая находится в том же басе, что и материал.",
        "other": []
      }, {
        "id": 30,
        "tier": "zpm",
        "name": "ELECTROMAGNETIC INDUCTION FURNACE",
        "img": "media/gregtech/EIF.png",
        "desc": "Является аналогом Electric Blast Furnace с возможность установки параллельности. Может работать с многоамперными Energy Hatch. Доступна на ZPM тире.",
        "general": "Может выполнять все рецепты аналога. Может работать со множеством схем, находящихся в разных басах в режиме \\\"Buses separated on\\\" (переключается отвёрткой при зажатой клавише Shift). Рецепт выполняется с той схемой, которая находится в том же басе, что и материал.",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 31,
        "tier": "luv",
        "name": "MULTI CHEMICAL REACTOR",
        "img": "media/gregtech/MLCR.png",
        "desc": "Машина является аналогом Large Chemical Reactor с возможностью использования параллели. Может работать с многоамперными Energy Hatch. Доступна на LuV тире.",
        "general": "Может выполнять все рецепты аналога.",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 32,
        "tier": "luv",
        "name": "MULTI DISTILLATION TOWER",
        "img": "media/gregtech/MDT.png",
        "desc": "Машина является аналогом Distillation Tower с возможностью использования параллели. Может работать с многоамперными Energy Hatch.",
        "general": "На одном слое может располааться до 4 Output Hatch. Их можно залочить под выход определенной жидкости при помощи клика ПКМ отвёрткой с зажатой клавишей Shift.",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Имеет фиксированную высоту, но соблюдает распределение выходных жидкостей по слоям."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 33,
        "tier": "uv",
        "name": "ANTIMATTER REACTOR",
        "img": "media/gregtech/ANTIMATT.png",
        "desc": "Генератор средней мощности на антиматерии. Может работать с многоамперными Dynamo Hatch. ",
        "general": "Сталкивая водород и анти-водород из магнитных контейнеров (Pod) и потребляя газообразный азот, выдает 4 л/тик азотной плазмы и электроэнергию мощностью 2 097 152 eU/t в течение 30 минут.",
        "other": []
      }, {
        "id": 34,
        "tier": "uhv",
        "name": "TESSERACT",
        "img": "media/gregtech/TESSERACT.png",
        "desc": "Тессеракт позволяет получить первую инопланетную органику (Alien Organic Dust) и некоторые редкие материалы (америций и др.) в хороших количествах.",
        "general": "На получение материалов тратится гипер-топливо (Hyper Fuel) и много энергии. В зависимости от вида гипер-топлива, получаются разные материалы.",
        "other": [
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Для питания необходимо 2 Energy hatch! "
              }
            ],
            "img": []
          }
        ]
      },
      {
        "id": 35,
        "tier": "ev",
        "name": "PARAMETRIC DIFFUSER",
        "img": "media/gregtech/MATRIXDIFFUSER.png",
        "desc": "В Input Bus рядом с контроллером необходимо положить любую совершенную (Exquisite) линзу. Требуется низкая гравитация.",
        "general": "Машина нужна для генерации пучка нестабильных матричных частиц.",
        "other": [
          {
            "title": "",
            "desc": [
              {
                "p": "Сила луча зависит от уровня Energy hatch: (tier - 3) * random(200). Чем выше сила луча, тем быстрее накапливаются частицы в следующей машине - Matrix Particles Stabilizer. Расстояние до Matrix Particles Stabilizer не должно превышать 30 блоков."
              },
              {
                "p": ""
              },
              {
                "p": "Луч должен быть направлен в I-glass с левой стороны Matrix Particles Stabilizer. Луч не наносит урон."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Цвет I-Glass в структуре не имеет значения. "
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 36,
        "tier": "ev",
        "name": "MATRIX PARTICLES STABILIZER",
        "img": "media/gregtech/MATRIXSTABILIZER.png",
        "desc": "Машина нужна для стабилизации пучка нестабильных матричных частиц. Требуется низкая гравитация.",
        "general": "Луч нестабильных частиц от Parametric Diffuser должен входить в I-Glass слева, луч стабильных частиц для Matrix Particles Containment выходит справа.",
        "other": [
          {
            "title": "",
            "desc": [
              {
                "p": "Расстояние до Parametric Diffuser и Matrix Particles Containment не должно превышать 30 блоков."
              },
              {
                "p": ""
              },
              {
                "p": "Может накопить до 100 тыс. стабильных частиц. Выдает 1 тыс. частиц в секунду."
              },
              {
                "p": ""
              },
              {
                "p": "Лучи и молнии не наносят урон."
              },
              {
                "p": "Постоянное потребление 1,920 EU/t электроэнергии."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Цвет I-Glass в структуре не имеет значения."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 37,
        "tier": "ev",
        "name": "PARTICLES CONTAINMENT",
        "img": "media/gregtech/MATRIXCONTAINER.png",
        "desc": "Машина заполняет стабильными матричными частицами специальные контейнеры. Требуется низкая гравитация.",
        "general": "Луч стабильных частиц от Matrix Particles Containment должен входить в I-Glass слева.",
        "other": [
          {
            "title": "",
            "desc": [
              {
                "p": "Расстояние до Matrix Particles Containment не должно превышать 30 блоков."
              },
              {
                "p": ""
              },
              {
                "p": "Может накопить до 100 тыс. стабильных частиц. Заполняет 8 контейнеров (Empty Portable Cell with Matrix Particles) в секунду, каждый содержит 1000 частиц."
              },
              {
                "p": ""
              },
              {
                "p": "Луч не наносит урон."
              },
              {
                "p": "Потребляет 1920 eU/t электроэнергии."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Цвет I-Glass в структуре не имеет значения."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 38,
        "tier": "ev",
        "name": "ME SYSTEM PROVIDER",
        "img": "media/gregtech/MESP.png",
        "desc": "Машина производит компоненты МЭ-сети, потребляя матричные частицы, а также ускоряет саму МЭ-сеть. Может работать с многоамперными Energy Hatch.",
        "general": "Потребляя матричные частицы, выполняет рецепты, которые можно увидеть в NEI. ",
        "other": [
          {
            "title": "",
            "desc": [
              {
                "p": "Матричные частицы выгружаются в машину из контейнеров (Full Portable Cell with Matrix Particles) в камеру (Matrix Particles Chamber)."
              },
              {
                "p": "Может накопить до 100 тыс. матричных частиц. "
              },
              {
                "p": ""
              },
              {
                "p": "Дополнительно, не потребляя на это энергию или частицы, ускоряет находящиеся внутри себя сопроцессоры создания (Crafting Co-Processing Unit), т.е. они начинают работать за несколько сопроцессоров. Степень ускорения зависит от уровня находящихся внутри хранилищ создания (Crafting Storage): для 4k хранилища - x2 (4 сопроцессора начинают работать как 8), для 16k - x3, для 64k - x4. При комбинировании хранилищ разного уровня ускорение считается для низшего уровня. Хранилища создания EC2 не ускоряют сопроцессоры, но могут быть использованы."
              },
              {
                "p": "Подключается к МЭ-сети через ME connector. Потребляет 2 канала."
              }
            ],
            "img": []
          },
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Цвет I-Glass в структуре не имеет значения. "
              }
            ],
            "img": []
          }
        ]
      },
      {
        "id": 39,
        "tier": "steam",
        "name": "THE MILL",
        "img": "media/gregtech/THE_MILL.png",
        "desc": "Ветрянная мельница это самый первый мультиблок в игре. Она вам потребуется для дробление перый ресурсных камешков. Мельница большая по размеру, а значит хороший вариант для первой базы.",
        "general": "Мельница выполняет рецепты, которые можно увидеть в неи.",
        "other": [
          {
            "title": "Особенности структуры",
            "desc": [
              {
                "p": "Ротор появляется сам при корректной сборки структуры"
              }
            ],
            "img": []
          }
        ]
      },
      {
        "id": 40,
        "tier": "luv",
        "name": "ADVANCED CRACKING UNIT",
        "img": "media/gregtech/ADV_CRACKING.png",
        "desc": "Машина является аналогом Oil Cracking Unit. Может работать с многоамперными Energy Hatch и параллельностью.",
        "general": "Выполняет все рецепты аналога.",
        "other": [
          {
            "title": "Параллелизм",
            "desc": [
              {
                "p": "- Требуется Parallel Super Computer"
              },
              {
                "p": ""
              },
              {
                "p": "- Требуется Communication Tower"
              },
              {
                "p": ""
              },
              {
                "p": "Машина имеет параллелизм. Параллелизм - это способность одновременно выполнять одно и то же действие в нескольких потоках."
              },
              {
                "p": ""
              },
              {
                "p": "Если рассматривать параллелизм в игре, то это выполнение одного типа рецепта несколько раз за один цикл (при этом расход энергии пропорционален количеству выполняемых рецептов)."
              },
              {
                "p": "Машина позволяет тратить очки параллелей (PP). Очки ограничены Parallel Receiver: 4, 16, 64, 256."
              },
              {
                "p": ""
              },
              {
                "p": "После установки вышки связи, необходимо настроить частоту, с которой будет работать вышка, компьютер и машины. Настраивается через ноутбук, кликом по контролеру"
              },
              {
                "p": "Чтобы передать PP в машину, необходимо установить в нее Parallel Receiver. Затем кликните на Parallel Receiver ноутбуком и на Parallel Transmitter на компьютере."
              },
              {
                "p": ""
              },
              {
                "p": "Если приемник/передатчик горит красным - ошибка подключения или нет подключения, если горит желтым - успешное подключение."
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 41,
        "tier": "steam",
        "name": "COAL MINER",
        "img": "media/gregtech/COAL_MINER.png",
        "desc": "Базовый майнер для добычи полезных ископаемых.",
        "general": "Майнер добывает руду в чанке в котором находится. ",
        "other": [
          {
            "title": "Обязательно!",
            "desc": [
              {
                "p": "Прочитайте в разделе \"Механики\" о том как устроена генерация полезных ископаемых."
              }
            ],
            "img": []
          },
          {
            "title": "Механика работы",
            "desc": [
              {
                "p": "С помощью Miner Drill Hatch майнер производить добычу полезных ископаемых."
              },
              {
                "p": "В Drill Hatch помещается Drill Head - оголовье, которое имеет прочность, за каждый цикл работы майнера прочность оголовья уменьшается."
              },
              {
                "p": ""
              },
              {
                "p": "Майнер не имеет никаких бонусов для добычи. Может копать только нулевой слой."
              }
            ],
            "img": [
              {"img": "media/gregtech/miner_drill.png"}
            ]
          },
          {
            "title": "Важно!",
            "desc": [
              {
                "p": "В одном чанке может находится только один майнер!"
              }
            ],
            "img": []
          }
        ]
      }, {
        "id": 42,
        "tier": "lv",
        "name": "BASIC ELECTRIC MINER",
        "img": "media/gregtech/BASIC_MINER.png",
        "desc": "Электрический майнер для добычи полезных ископаемых",
        "general": "Майнер добывает руду в чанке в котором находится.",
        "other": [
          {
            "title": "Обязательно!",
            "desc": [
              {
                "p": "Прочитайте в разделе \"Механики\" о том как устроена генерация полезных ископаемых."
              }
            ],
            "img": []
          },
          {
            "title": "Механика работы",
            "desc": [
              {
                "p": "С помощью Miner Drill Hatch майнер производить добычу полезных ископаемых."
              },
              {
                "p": "В Drill Hatch помещается Drill Head - оголовье, которое имеет прочность, за каждый цикл работы майнера прочность оголовья уменьшается."
              },
              {
                "p": "Можно использовать разные тиры оголовья. Тир оголовья означает, что к базовой добычи руды (x1) прибавляется коэффициент (уровень оголовья): Добыча = 1 + tier"
              },
              {
                "p": ""
              },
              {
                "p": "Майнер имеет бонус к добычи. Выполняется дробление вскопанной руды (шанс на дробление 5%)."
              }
            ],
            "img": [
              {"img": "media/gregtech/miner_drill.png"}
            ]
          },
          {
            "title": "Важно!",
            "desc": [
              {
                "p": "В одном чанке может находится только один майнер!"
              }
            ],
            "img": []
          }
        ]
      },
      {
        "id": 43,
        "tier": "ev",
        "name": "ADVANCED ELECTRIC MINER",
        "img": "media/gregtech/ADV_MINER.png",
        "desc": "Улучшеный электрический майнер для добычи полезных ископаемых.",
        "general": "Майнер добывает руду во всей жиле в которой находится чанк и сам майнер.",
        "other": [
          {
            "title": "Обязательно!",
            "desc": [
              {
                "p": "Прочитайте в разделе \"Механики\" о том как устроена генерация полезных ископаемых."
              }
            ],
            "img": []
          },
          {
            "title": "Механика работы",
            "desc": [
              {
                "p": "С помощью Miner Drill Hatch майнер производить добычу полезных ископаемых."
              },
              {
                "p": "В Drill Hatch помещается Drill Head - оголовье, которое имеет прочность, за каждый цикл работы майнера прочность оголовья уменьшается."
              },
              {
                "p": "Можно использовать разные тиры оголовья. Тир оголовья означает, что к базовой добычи руды (x1) прибавляется коэффициент (уровень оголовья): Добыча = 1 + tier"
              },
              {
                "p": ""
              },
              {
                "p": "Майнер имеет бонус к добычи. Выполняется дробление вскопанной руды (шанс на дробление 5%)."
              }
            ],
            "img": [
              {
                "img": "media/gregtech/miner_drill.png"
              }
            ]
          },
          {
            "title": "",
            "desc": [
              {
                "p": "С помощью Miner Enrichment Unit майнер увеличивает выход руды, а также делает первую переработку этой руды. "
              },
              {
                "p": ""
              },
              {
                "p": "Enrichment Unit выполняет рецепты Flotation Unit. Энергия суммируется по рецепту."
              },
              {
                "p": ""
              },
              {
                "p": "Пример (см рис.): если у вас стоит Drill Head 3 уровня, значит руда одного типа добывается x4, исходя из этого:"
              },
              {
                "p": "- Потребление энергии = 4 * 480 = 1920 EU/t + базовое потребление майнера."
              },
              {
                "p": "- Потребление жидкости = 4 * 1000 = 4000L."
              },
              {
                "p": "- Время = не учитывается."
              }
            ],
            "img": [
              {
                "img": "media/gregtech/enrich.png"
              }
            ]
          },
          {
            "title": "Важно!",
            "desc": [
              {
                "p": "В одном чанке может находится только один майнер!"
              }
            ],
            "img": []
          }
        ]
      },
      {
        "id": 44,
        "tier": "lv",
        "name": "AEROSTATE PLATFORM",
        "img": "media/gregtech/AEROSTATE.png",
        "desc": "Аэростат, воздушный шар и тд. Данный мультиблок представляет собой платформу для перемещения в игре.",
        "general": "Для перемещения вам потребуется газ, чаще всего используется Natural Gas или Refinery Gas.",
        "other": [
          {
            "title": "",
            "desc": [
              {
                "p": "Чтобы зарегестрировать платформу вам понадобиться предмет Aerostate."
              },
              {
                "p": ""
              },
              {
                "p": "Вы должны открыть гуи платформы  с шифтом и ввести имя платформы."
              },
              {
                "p": "Затем вы можете открыть гуи платформы без шифта."
              },
              {
                "p": ""
              },
              {
                "p": "Интерфейс платформы представляет собой список платформ в радиусе 512 блоков."
              },
              {
                "p": ""
              },
              {
                "p": "Вы можете перемещаться на любую из них если у вас достаточно газа."
              }
            ],
            "img": [
              {
                "img": "https://i.imgur.com/b5WZVIJ.gif"
              }
            ]
          },
          {
            "title": "Важно!",
            "desc": [
              {
                "p": "Платформу нужно грузить чанклодером!"
              }
            ],
            "img": []
          }
        ]
      }






      //---
    ]
  }, {
    "id": 1,
    "mod": "Tectech",
    "pages": [
      {
        "id": 0,
        "tier": "zpm",
        "name": "Research Station",
        "img": "media/gregtech/RESEARCHSTATION.png",
        "desc": "Механизм нужен для изучения рецептов высокоуровневых предметов (как правило, UHV+ тира). Может работать с многоамперными Energy Hatch.",
        "general": "Флешку (Data Stick) необходимо положить в контроллер исследовательской станции. Предмет, который необходимо изучить для получения рецепта - в Object Holder.",
        "other": [
          {
            "title": "",
            "desc": [
              {"p": "Квантовый компьютер (Quantum Computer) должен обеспечить исследовательскую станцию необходимым количеством вычислений (computation) в секунду для изучения рецепта. Если вычислений меньше, чем надо, исследование не запустится, если больше - выполнится быстрее. Уровень Energy Hatch на быстроту исследования не влияет."},
              {"p": ""},
              {"p": "Исследовательская станция связывается с квантовым компьютером с помощью оптоволокна (Optical Fiber Cable). В станции кабель подключается к приемнику данных (Optical Slave Connector), в компьютере - к передатчику данных (Optical Master Connector). 1 передатчик может быть соединен только с 1 приемником. Если нужно подключить к станции несколько квантовых компьютеров, их можно подключить последовательно, устанавливая в них приемники."},
              {"p": ""},
              {"p": "Для работы передатчик, приемник и связывающий их кабель должны быть покрашены в один цвет. Покрашенные в разные цвета оптоволоконные кабеля не соединяются."},
            ],
            "img": []
          }, {
            "title": "Важно!",
            "desc": [
              {"p": "Запрещен демонтаж структуры в рабочем состоянии во избежание взрыва!"},
            ],
            "img": []
          },
        ]
      }, {
        "id": 1,
        "tier": "zpm",
        "name": "Quantum Computer",
        "img": "media/gregtech/QCOMPUTER.png",
        "desc": "Механизм нужен для обеспечения исследовательской станции (Research station) вычислениями (computation). Может работать с многоамперными Energy Hatch.",
        "general": "Квантовый компьютер связывается с исследовательской станцией с помощью оптоволокна (Optical Fiber Cable). " +
          "В станции кабель подключается к приемнику данных (Optical Slave Connector), в компьютере - к передатчику данных (Optical Master Connector). " +
          "1 передатчик может быть соединен только с 1 приемником. Если нужно подключить к станции несколько квантовых компьютеров, их можно подключить последовательно, устанавливая в них приемники.",
        "other": [{
          "title": "",
          "desc": [
            {
              "p": "Микросхемы, обеспечивающие вычисления, и теплоотводы (Vent), охлаждающие их, помещаются в компьютерные стойки (Computer Rack). " +
                "В зависимости от количества необходимых стоек, можно менять длину компьютера от 4 до 16 блоков. Разные микросхемы обеспечивают разное количество вычислений в секунду."
            },
            {"p": ""},
            {
              "p": "При работе компьютера стойки с микросхемами нагреваются. Если выбрана несбалансированная схемы охлаждения, то при нагреве стойки " +
                "до температуры cвыше 60% от критической, микросхемы в ней сгорят и она начнет остывать."
            },
          ],
          "img": []
        }, {
          "title": "Потребление энергии",
          "desc": [
            {"p": "Квантовый компьютер потребляет 524288 * (1+n) eU/t,"},
            {"p": "n - количество стоек c микросхемами (пустые стойки энергию не потребляют)"},
          ],
          "img": []
        },
          {
            "title": "Особенности конструкции",
            "desc": [
              {"p": "Блоки перед вентиляторами компьютера (Computer Heat Vent) должны быть пустыми."},
            ],
            "img": []
          }, {
            "title": "Важно!",
            "desc": [
              {"p": "Запрещен демонтаж структуры в рабочем состоянии во избежание взрыва!"},
            ],
            "img": []
          }, {
            "title": "Uncertainty resolving",
            "desc": [
              {
                "p": "You just need to balance the lights around the focal points in the uncertainty hatch. There are 9 focal points in total, active ones are either green or red, you don\u0027t need to balance inactive ones."
              },
              {
                "p": ""
              },
              {
                "p": "If you take a closer look at the LEDs you will notice that they have 2 shades on their surface. Darker color denotes the affected area by the focal point. Only that area needs to be \"balanced on top of the focal point\" to satisfy it."
              },
              {
                "p": ""
              },
              {
                "p": "In the example i have highlighted the effect range of 2 focal points."
              },
              {
                "p": ""
              },
              {
                "p": "Buttons on the sides are used to pickup and replace 2 uncertain values."
              },
              {
                "p": ""
              },
              {
                "p": "Buttons on the sides are used to pickup and replace 2 uncertain values."
              }
            ],
            "img": [
              {
                "img": "media/gregtech/Uncertain.png"
              }
            ]
          }]
      }, {
        "id": 2,
        "tier": "zpm",
        "name": "Data Bank",
        "img": "media/gregtech/DB.png",
        "desc": "Механизм позволяет хранить большое количество флешек (Data Stick) с рецептами  сборочных линий (Assembly Line) и поставлять в них эти рецепты. Может работать с многоамперными Energy Hatch.",
        "general": "Флешки хранятся в Data Access Hatch (обычный, Advanced, Automatable). ",
        "other": [{
          "title": "",
          "desc": [
            {
              "p": "Банк данных связывается со сборочными линиями с помощью оптоволокна (Optical Fibre Cable). В банке данных кабель " +
                "подключается к передатчику данных (Data Bank Master Connector), в сборочной линии - к приемнику данных (Assembly Line Slave Connector). 1 передатчик может быть соединен только с 1 приемником."
            },
            {"p": ""},
            {"p": "Для работы передатчик, приемник и связывающий их кабель должны быть покрашены в один цвет. Покрашенные в разные цвета оптоволоконные кабеля не соединяются."},
            {"p": ""},
            {"p": "Банк данных тратит на работу 2048*(a * b + 1) eU/t,"},
            {"p": "a>=1 - количество отсеков с флешками, "},
            {"p": "b>=1 - количество передатчиков."},
          ],
          "img": []
        }, {
          "title": "Важно!",
          "desc": [
            {"p": "Запрещен демонтаж структуры в рабочем состоянии во избежание взрыва!"},
          ],
          "img": []
        },]
      },
    ]
  }
]

/*
{
   "id": 0,
  "name": "",
  "img": "",
  "desc": "",
  "general": "",
  "other": [
    {
      "title": "",
      "desc": [
        {"p": ""},
      ],
      "img": []
    },
  ]
},
*/

const mechanics = [
  {
    "id": 0,
    "mod": "impact-core",
    "pages": [
      {
        "id": 0,
        debug: 0,
        "name": "How the Works Ores",
        "img": "media/gregtech/111.png",
        category: [
          {
            "title": "Описание",
            body: [
              "В мире IMPACT представлена совершенно уникальная система генерации ископаемых ресурсов.",
              "",
              "Несмотря на отсутствие возможности обнаружения жил невооруженным глазом, данная генерация предоставляет более комфортную добычу руды.",
            ],
            imgBody: []
          }, {
            "title": "Принцип генерации руды",
            body: [
              "Руда генерируется регионами 512x512 блоков, в регионе находится 64 различных жил, которые генерируется по 16 чанков (4х4).",
              "",
              "В игре существует 2 слоя:",
              "- слой #0: Small руды, могут содержать только 1 вид руды",
              "- слой #1: Normal руды, могут содержать до 4 видов руды",
              "",
              "На рисунке выбран слой #1, видно что жила состоит из 16 кубиков (чанков).",
              "",
            ],
            imgBody: [
              "media/gregtech/ore_layer_0.png",
            ]
          }, {
            "title": "",
            body: [
              "В каждом чанке в зависимости от уровня слоя и типа жилы, генерируется определенное количество руды.",
              "",
              "Количество, указанное в чанке, является циклами. Цикл - количество операций копания текущего чанка.",
              "",
            ],
            imgBody: []
          }, {
            "title": "Геологоразведка",
            body: [
              "На первых этапах найти руду можно с помощью специального инструмента - Ore Sampling Tool",
              "",
              "Данный инструмент позволяет определить по породе, какая руда находится в текущем чанке.",
              "Можно использовать только для слоя #0",
              "",
            ],
            imgBody: [
              "https://i.imgur.com/baAOsHM.gif",
            ]
          }, {
            "title": "",
            body: [
              "В ранней игре найти руду становится проще, для этого используюся блочные проспекторы.",
              "",
              "Проспекторы позволяют находить не только руду, но и жидкости.",
              "",
            ],
            imgBody: [
              "https://i.imgur.com/mlj29PP.gif",
            ]
          }, {
            "title": "",
            body: [
              "В поздней игре появляются ручные проспекторы, не требующие ничего кроме энергии. Принцип работый такой же как у блочных проспекторов",
              "",
            ],
            imgBody: [
              "https://i.imgur.com/dqtruf0.gif",
            ]
          }, {
            "title": "Добыча руды",
            body: [
              "Для добычи руды, вам потребуются майнеры:",
              "",
              "- Coal Miner: угольный майнер, питается углем, добывает руду в слое #0 (см. статью на вики)",
              "",
              "- Basic Electric Miner: электрический майнер, способный добывать руду во всех слоях, имеет небольшой бонус при копании (см. статью на вики)",
              "",
              "- Advanced Electric Miner: улучшеный электрический майнер, способный добывать руду во всех слоях, " +
              "имеет значительный бонус при копании, а также содержит модуль флотации (см. статью на вики)",
              "",
            ],
            imgBody: [
              "media/gregtech/miners.png",
            ]
          },
        ]
      },
    ],
  },
  // {
  //    "id": 0,
  //   "mod": "tectech",
  //   "pages": [
  //     // {
  //     //    "id": 0,
  //     //   "name": "0",
  //     //   "img": "0",
  //     //   category: [
  //     //     {
  //     //        "id": 0,
  //     //       "title": ""title"",
  //     //       body: [
  //     //         "test body"
  //     //       ],
  //     //       imgBody: [
  //     //         "qqqq"
  //     //       ]
  //     //     }
  //     //   ]
  //     // }
  //   ],
  // }
]

const mod = [
  {
    "name": "impact-core",
    "id": 0
  },
  {
    "name": "tectech",
    "id": 1
  },
]


const tiers = [
  {label: "ALL", "name": "all"},
  {label: "STEAM AGE", "name": "steam"},
  {label: "ULV", "name": "ulv"},
  {label: "LV", "name": "lv"},
  {label: "MV", "name": "mv"},
  {label: "HV", "name": "hv"},
  {label: "EV", "name": "ev"},
  {label: "IV", "name": "iv"},
  {label: "LUV", "name": "luv"},
  {label: "ZPM", "name": "zpm"},
  {label: "UV", "name": "uv"},
  {label: "UHV", "name": "uhv"},
]

const module = [
  {label: "MACHINES", "name": "machines", icon: "precision_manufacturing"},
  {label: "MECHANICS", "name": "mechanics", icon: "book"},
]

export default {
  machines, tiers, module, mechanics, mod
}
