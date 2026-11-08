const labOrderItems = [
  { code: "P001", product: "Elecsys Testosteron II", expiry: "2027-03-31", quantity: 5, price: 45 },
  { code: "P002", product: "Elecsys HCG+B", expiry: "2027-05-31", quantity: 5, price: 45 },
  { code: "P003", product: "Elecsys DHEA-S", expiry: "2027-04-30", quantity: 3, price: 65 },
  { code: "P004", product: "Elecsys HBsAg II 100 test", expiry: "2026-12-31", quantity: 2, price: 75 },
  { code: "P005", product: "Elecsys Anti-HCV II - 100 Test", expiry: "2027-02-28", quantity: 2, price: 150 },
  { code: "P006", product: "Elecsys HIV Combi PT 100 Test", expiry: "2026-11-30", quantity: 2, price: 130 },
  { code: "P007", product: "Elecsys Anti-Hbs II - 100 Test", expiry: "2027-04-30", quantity: 2, price: 75 },
  { code: "P008", product: "Elecsys Cortisol II", expiry: "2026-12-31", quantity: 2, price: 60 },
  { code: "P009", product: "Elecsys Estradiol III", expiry: "2026-12-31", quantity: 5, price: 45 },
  { code: "P010", product: "TSH", expiry: "2027-03-31", quantity: 15, price: 55 },
  { code: "P011", product: "Elecsys Total T3", expiry: "2027-03-31", quantity: 5, price: 75 },
  { code: "P012", product: "Elecsys T4", expiry: "2027-05-31", quantity: 15, price: 75 },
  { code: "P013", product: "Elecsys CA 15-3 II", expiry: "2027-05-31", quantity: 5, price: 75 },
  { code: "P014", product: "IGF - 1", expiry: "2026-12-31", quantity: 2, price: 300 },
  { code: "P015", product: "AMH", expiry: "2026-12-31", quantity: 1, price: 650 },
  { code: "P016", product: "ANTI-TSHR", expiry: "2027-02-28", quantity: 2, price: 250 },
  { code: "P017", product: "ANTI-TSHR calset", expiry: "2027-02-28", quantity: 1, price: 90 },
  { code: "P018", product: "Elecsys Ca 19-9", expiry: "2026-11-30", quantity: 5, price: 75 },
  { code: "P019", product: "Elecsys FT4 IV", expiry: "2027-01-31", quantity: 5, price: 45 },
  { code: "P020", product: "TACROLIMUS Elecsys Cobas e 100", expiry: "2027-05-31", quantity: 1, price: 450 },
  { code: "P021", product: "Elecsys Cyclosporine", expiry: "2027-01-31", quantity: 1, price: 400 },
  { code: "P022", product: "Parathormone (PTH)", expiry: "2026-11-30", quantity: 2, price: 110 },
  { code: "P023", product: "Vitamin B12 G2 Elecsys cobas e 100", expiry: "2027-05-31", quantity: 10, price: 55 },
  { code: "P024", product: "Testosteron II CalSet II", expiry: "2027-01-31", quantity: 1, price: 35 },
  { code: "P025", product: "HCG+B CalSet", expiry: "2027-01-31", quantity: 1, price: 35 },
  { code: "P026", product: "Cortisol II CalSet", expiry: "2027-03-31", quantity: 1, price: 40 },
  { code: "P027", product: "TSH CalSet", expiry: "2027-04-30", quantity: 1, price: 35 },
  { code: "P028", product: "DHEA-S CalSet", expiry: "2027-05-31", quantity: 1, price: 40 },
  { code: "P029", product: "Estradiol III CalSet", expiry: "2027-07-31", quantity: 1, price: 35 },
  { code: "P030", product: "CalSet IGF-1", expiry: "", quantity: 1, price: 300 },
  { code: "P031", product: "CA 15-3 II CalSet", expiry: "2027-07-31", quantity: 1, price: 35 },
  { code: "P032", product: "Ca 19-9 CalSet", expiry: "2027-08-31", quantity: 1, price: 35 },
  { code: "P033", product: "CalSet PTH", expiry: "2027-05-31", quantity: 1, price: 50 },
  { code: "P034", product: "ProCell Elecsys,cobas e", expiry: "2027-08-31", quantity: 30, price: 35 },
  { code: "P035", product: "CleanCell Elecsys,cobas e", expiry: "2027-08-31", quantity: 30, price: 35 },
  { code: "P036", product: "Procell II M", expiry: "2028-01-31", quantity: 10, price: 40 },
  { code: "P037", product: "CleanCell M", expiry: "2027-03-31", quantity: 10, price: 40 }
];

const labOrder2Items = [
  { code: "P038", supplierCode: "11731629322", product: "Elecsys CEA 100 test", expiry: "2027-02-28", quantity: 5, price: 60 },
  { code: "P013", supplierCode: "3045838122", product: "Elecsys CA 15-3 II", expiry: "2027-05-31", quantity: 5, price: 75 },
  { code: "P018", supplierCode: "11776193122", product: "Elecsys Ca 19-9", expiry: "2027-09-30", quantity: 5, price: 75 },
  { code: "P039", supplierCode: "8791686190", product: "Elecsys Total PSA", expiry: "2027-08-30", quantity: 5, price: 65 },
  { code: "P040", supplierCode: "8828601190", product: "Elecsys Free PSA", expiry: "2027-04-30", quantity: 5, price: 70 },
  { code: "P009", supplierCode: "6656021190", product: "Elecsys Estradiol III", expiry: "2026-12-31", quantity: 1, price: 45 },
  { code: "P041", supplierCode: "3203093190", product: "Elecsys Prolactin II", expiry: "2027-01-31", quantity: 2, price: 70 },
  { code: "P042", supplierCode: "32773356190", product: "Prolactin II CalSet", expiry: "2027-07-31", quantity: 1, price: 40 },
  { code: "P001", supplierCode: "8946353190", product: "Elecsys Testosteron II", expiry: "2027-03-31", quantity: 5, price: 45 },
  { code: "P003", supplierCode: "3000087122", product: "Elecsys DHEA-S", expiry: "2027-04-30", quantity: 1, price: 65 },
  { code: "P043", supplierCode: "31839711122", product: "Diluent Universal", expiry: "2027-11-30", quantity: 2, price: 25 },
  { code: "P044", supplierCode: "5390125190", product: "Elecsys hGH", expiry: "2026-12-31", quantity: 3, price: 150 },
  { code: "P045", supplierCode: "5031664190", product: "PreciControl Anti-CCP", expiry: "2028-06-30", quantity: 1, price: 55 },
  { code: "P046", supplierCode: "5341787190", product: "PreciControl Multimarker", expiry: "2027-09-30", quantity: 1, price: 75 },
  { code: "P047", supplierCode: "121331113122", product: "Elecsys NSE", expiry: "2026-02-28", quantity: 2, price: 50 },
  { code: "P048", supplierCode: "121331121122", product: "Elecsys NSE CS", expiry: "2025-08-31", quantity: 1, price: 20 },
  { code: "P049", supplierCode: "8837031190", product: "Elecsys Anti-HCV II - 200 Test", expiry: "2027-02-28", quantity: 1, price: 190 },
  { code: "P050", supplierCode: "3290379190", product: "PreciControl Anti-HCV", expiry: "2027-06-30", quantity: 1, price: 70 },
  { code: "P051", supplierCode: "8814864190", product: "Elecsys HBsAg II - 200 Test", expiry: "2027-07-31", quantity: 4, price: 135 },
  { code: "P052", supplierCode: "4687876190", product: "PreciControl HBsAg", expiry: "2027-03-31", quantity: 1, price: 65 },
  { code: "P007", supplierCode: "8498598190", product: "Elecsys Anti-Hbs II - 100 Test", expiry: "2027-04-30", quantity: 10, price: 75 },
  { code: "P053", supplierCode: "7026790190", product: "Elecsys Anti-HBc II", expiry: "2027-06-30", quantity: 1, price: 145 },
  { code: "P054", supplierCode: "4927931190", product: "PreciControl Anti-HBc II", expiry: "2027-08-31", quantity: 1, price: 70 },
  { code: "P055", supplierCode: "8086630190", product: "Elecsys Anti-HAV II", expiry: "2027-02-28", quantity: 1, price: 125 },
  { code: "P056", supplierCode: "8086672190", product: "PreciControl Anti-HAV II", expiry: "2027-04-30", quantity: 1, price: 95 },
  { code: "P057", supplierCode: "3737551190", product: "Elecsys Ferritin - 100 Test", expiry: "2027-07-31", quantity: 9, price: 65 },
  { code: "P058", supplierCode: "3737586190", product: "Ferritin CalSet", expiry: "2028-05-31", quantity: 2, price: 30 },
  { code: "P059", supplierCode: "11930346122", product: "Elecsys SysWash", expiry: "2027-03-31", quantity: 8, price: 25 }
];

const labOrder2ShipmentItems = labOrder2Items.map(item => ({
  shipmentId: "SHP-002-01",
  code: item.code,
  shipped: item.quantity,
  shipDate: "2026-11-04",
  arrivalDate: ""
}));

const labShipmentItems = [
  { shipmentId: "SHP-001-01", code: "P034", shipped: 30, shipDate: "2026-10-16", arrivalDate: "2026-10-26" },
  { shipmentId: "SHP-001-01", code: "P035", shipped: 30, shipDate: "2026-10-16", arrivalDate: "2026-10-26" },
  { shipmentId: "SHP-001-01", code: "P036", shipped: 10, shipDate: "2026-10-16", arrivalDate: "2026-10-26" },
  { shipmentId: "SHP-001-01", code: "P037", shipped: 10, shipDate: "2026-10-16", arrivalDate: "2026-10-26" },
  { shipmentId: "SHP-001-02", code: "P001", shipped: 5, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P002", shipped: 5, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P003", shipped: 3, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P004", shipped: 2, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P005", shipped: 2, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P006", shipped: 2, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P007", shipped: 2, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P008", shipped: 2, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P009", shipped: 5, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P010", shipped: 15, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P011", shipped: 5, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P012", shipped: 15, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P013", shipped: 5, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P016", shipped: 2, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P017", shipped: 1, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P018", shipped: 5, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P019", shipped: 5, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P020", shipped: 1, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P022", shipped: 2, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P023", shipped: 10, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P025", shipped: 1, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P027", shipped: 1, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P028", shipped: 1, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P029", shipped: 1, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P031", shipped: 1, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P032", shipped: 1, shipDate: "2026-11-04", arrivalDate: "" },
  { shipmentId: "SHP-001-02", code: "P033", shipped: 1, shipDate: "2026-11-04", arrivalDate: "" }
];

const labPartnerPayments = {
  mohammad: 6000,
  milad: 6000
};
const labSupplierDiscount = 150;
const labOrder2Payments = {
  milad: 5885
};
const usdMoney = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll(".theme-option").forEach(button => {
    const selected = button.dataset.theme === theme;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  localStorage.setItem("laboratory-business-hub-theme", theme);
}

function renderLabOrder() {
  const units = labOrderItems.reduce((sum, item) => sum + item.quantity, 0);
  const receivedUnits = labShipmentItems.filter(item => item.arrivalDate).reduce((sum, item) => sum + item.shipped, 0);
  const shipmentByCode = new Map(labShipmentItems.map(item => [item.code, item]));
  const total = labOrderItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const cashPaid = labPartnerPayments.mohammad + labPartnerPayments.milad;
  const settledAmount = cashPaid + labSupplierDiscount;
  const due = Math.max(total - settledAmount, 0);
  const paidPercent = settledAmount / total * 100;

  setText("#lab-order-value", usdMoney.format(total));
  setText("#lab-paid-value", usdMoney.format(cashPaid));
  setText("#lab-discount-value", usdMoney.format(labSupplierDiscount));
  setText("#lab-outstanding-value", usdMoney.format(due));
  setText("#lab-unit-count", `${units} units`);
  setText("#lab-paid-inline", `${usdMoney.format(cashPaid)} cash paid`);
  setText("#lab-due-inline", `${usdMoney.format(labSupplierDiscount)} discount · ${usdMoney.format(due)} due`);
  setText("#mohammad-contribution", usdMoney.format(labPartnerPayments.mohammad));
  setText("#milad-contribution", usdMoney.format(labPartnerPayments.milad));
  setText("#supplier-discount", usdMoney.format(labSupplierDiscount));
  setText("#payment-percent", `${paidPercent.toFixed(1)}% settled`);
  setText("#lab-total-units", units);
  setText("#lab-shipped-units", receivedUnits);
  setText("#accounting-total-units", units);
  setText("#lab-table-total", usdMoney.format(total));

  const paymentProgress = document.querySelector("#payment-progress");
  const paymentTrack = document.querySelector("#payment-progress-track");
  if (paymentProgress) paymentProgress.style.width = `${paidPercent}%`;
  if (paymentTrack) paymentTrack.setAttribute("aria-label", `${paidPercent.toFixed(1)} percent settled`);

  const orderTable = document.querySelector("#lab-order-items");
  if (orderTable) orderTable.innerHTML = labOrderItems.map(item => {
    const shipment = shipmentByCode.get(item.code);
    const status = !shipment
      ? '<span class="shipment-status under-preparation">With Supplier</span><small>7 units remain across 6 products</small>'
      : shipment.arrivalDate
        ? `<span class="shipment-status received">Received</span><small>${shipment.shipmentId} · ${shipment.arrivalDate}</small>`
        : `<span class="shipment-status in-transit">In Transit</span><small>${shipment.shipmentId} · since ${shipment.shipDate}</small>`;
    const received = shipment?.arrivalDate ? shipment.shipped : 0;
    return `<tr><td><span class="product-code">${item.code}</span></td><td><strong>${item.product}</strong><small>Roche E411</small></td><td>${item.expiry || '<span class="missing-value">Not provided</span>'}</td><td>${item.quantity}</td><td>${received}</td><td>${status}</td></tr>`;
  }).join("");

  const accountingTable = document.querySelector("#accounting-order-items");
  if (accountingTable) accountingTable.innerHTML = labOrderItems.map(item => `<tr><td><span class="product-code">${item.code}</span></td><td><strong>${item.product}</strong><small>Roche E411</small></td><td>${item.quantity}</td><td>${usdMoney.format(item.price)}</td><td><strong>${usdMoney.format(item.quantity * item.price)}</strong></td></tr>`).join("");

  const warehouseTable = document.querySelector("#warehouse-items");
  if (warehouseTable) warehouseTable.innerHTML = labShipmentItems.filter(shipment => shipment.arrivalDate).map(shipment => {
    const item = labOrderItems.find(product => product.code === shipment.code);
    return `<tr><td><span class="product-code">${item.code}</span></td><td><strong>${item.product}</strong></td><td>${item.expiry}</td><td>${shipment.shipped}</td><td>0</td><td><strong>${shipment.shipped}</strong></td><td><span class="shipment-status in-transit">In stock</span></td></tr>`;
  }).join("");
}

function renderLabOrder2() {
  const units = labOrder2Items.reduce((sum, item) => sum + item.quantity, 0);
  const total = labOrder2Items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const paid = labOrder2Payments.milad;
  const due = Math.max(total - paid, 0);
  const orderTable = document.querySelector("#lab-order-2-items");

  setText("#lab-order-2-unit-count", `${units} units`);
  setText("#lab-order-2-total", units);
  setText("#lab-order-2-received", 0);
  setText("#lab-order-2-account-value", usdMoney.format(total));
  setText("#lab-order-2-paid-value", usdMoney.format(paid));
  setText("#lab-order-2-outstanding-value", usdMoney.format(due));
  setText("#lab-order-2-milad-payment", usdMoney.format(paid));
  setText("#lab-order-2-account-total", usdMoney.format(total));
  setText("#lab-order-2-account-units", units);

  if (orderTable) orderTable.innerHTML = labOrder2Items.map(item => {
    const shipment = labOrder2ShipmentItems.find(entry => entry.code === item.code);
    return `<tr><td><span class="product-code">${item.code}</span><small>Roche #${item.supplierCode}</small></td><td><strong>${item.product}</strong><small>Roche E411</small></td><td>${item.expiry}</td><td>${item.quantity}</td><td>0</td><td><span class="shipment-status in-transit">In Transit</span><small>${shipment.shipmentId} · since ${shipment.shipDate}</small></td></tr>`;
  }).join("");

  const accountingTable = document.querySelector("#accounting-order-2-items");
  if (accountingTable) accountingTable.innerHTML = labOrder2Items.map(item => `<tr><td><span class="product-code">${item.code}</span><small>Roche #${item.supplierCode}</small></td><td><strong>${item.product}</strong><small>Roche E411</small></td><td>${item.quantity}</td><td>${usdMoney.format(item.price)}</td><td><strong>${usdMoney.format(item.quantity * item.price)}</strong></td></tr>`).join("");
}

function showLabView(view) {
  const target = document.querySelector(`#lab-${view}-view`);
  if (!target) return;
  document.querySelectorAll(".lab-view").forEach(section => section.classList.remove("active"));
  target.classList.add("active");
  document.querySelectorAll(".nav-item").forEach(button => button.classList.toggle("active", button.dataset.labTarget === view || (["detail", "detail-order-2"].includes(view) && button.dataset.labTarget === "orders") || (view === "sales" && button.dataset.labTarget === "accounting") || (["accounting-detail", "accounting-order-2"].includes(view) && button.dataset.labTarget === "accounting")));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-lab-target]").forEach(button => button.addEventListener("click", () => showLabView(button.dataset.labTarget)));
document.querySelectorAll(".theme-option").forEach(button => button.addEventListener("click", () => applyTheme(button.dataset.theme)));

applyTheme(localStorage.getItem("laboratory-business-hub-theme") || "classic");
renderLabOrder();
renderLabOrder2();
