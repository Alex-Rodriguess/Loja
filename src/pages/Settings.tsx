import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#f59e42", "#a21caf"];

export default function Settings() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );
  const [color, setColor] = useState<string>(
    localStorage.getItem("primaryColor") || COLORS[0]
  );

  const handleThemeChange = (t: string) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
  };

  const handleColorChange = (c: string) => {
    setColor(c);
    localStorage.setItem("primaryColor", c);
    document.documentElement.style.setProperty("--primary", c);
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Configurações de Aparência</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block font-medium mb-2">Tema</label>
            <div className="flex gap-2">
              <Button variant={theme === "light" ? "default" : "outline"} onClick={() => handleThemeChange("light")}>Claro</Button>
              <Button variant={theme === "dark" ? "default" : "outline"} onClick={() => handleThemeChange("dark")}>Escuro</Button>
            </div>
          </div>
          <div>
            <label className="block font-medium mb-2">Cor principal</label>
            <div className="flex gap-2">
              {COLORS.map((c) => (
                <button
                  key={c}
                  onClick={() => handleColorChange(c)}
                  style={{ background: c, width: 32, height: 32, borderRadius: "50%", border: color === c ? "2px solid #333" : "2px solid #fff" }}
                  aria-label={`Selecionar cor ${c}`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
