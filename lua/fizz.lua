local fizz = {
    ["3"] = "fizz",
    ["5"] = "buzz",
}

for i = 1, 100, 1 do
    local out = ""
    for k, v in pairs(fizz) do
        if i % tonumber(k) == 0 then
            out = out .. v
        end
    end
    if out == "" then
        out = tostring(i)
    end
    print(out)
end
