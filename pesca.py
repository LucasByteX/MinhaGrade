import time
import pyautogui
import winsound

arquivo = "latest.log"

with open(arquivo, "r", encoding="latin-1") as f:
    # vai pro final do arquivo
    f.seek(0, 2)

    while True:
        linha = f.readline()

        if not linha:
            time.sleep(0.05)  # espera novos dados
            continue

        linha = linha.strip()
        print("Nova linha:", linha)

        # AÇÕES
        if "Você pescou um peixe mais pesado do que sua vara suporta" in linha:
            pyautogui.keyDown('shift')
            time.sleep(0.4)
            pyautogui.click(button='right')
            pyautogui.keyUp('shift')
            pyautogui.move(0, -50)
            time.sleep(0.4)
            pyautogui.click()
            time.sleep(0.4)
            pyautogui.press('e')
            time.sleep(0.4)
            pyautogui.click(button='right')
        
        elif "venda os peixes antes de pescar novamente" in linha :
            pyautogui.press('5')
            time.sleep(0.4)
            pyautogui.click()
            time.sleep(0.4)
            pyautogui.press('7')
            time.sleep(0.4)
            pyautogui.press('2')
            time.sleep(0.2)
            pyautogui.click(button='right')

        elif "Sr_Alone" in linha:
            for _ in range(10):
                winsound.Beep(2500, 300)
                time.sleep(0.1)
       

        if "ERROR" in linha:
            print("🚨 ERRO")
