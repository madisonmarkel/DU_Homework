<h1>Storefront - mySQL Database</h1>
<h2>Basics:</h2>
<p>Storefront is a simply inventory application that stores an ID, Product Name, Department Name, Price, and Stock Quantity in a SQL Database. The app has two "views":</p>
<ul>
 <li>Customer</li>
 <li>Manager</li>
</ul>
<p>Each view has different capabilities according to their access level.</p>

<p>In order to use this application, you will have to do several NPM installs.</p>
<ul>
  <li>Inquirer</li>
  <li>mysql</li>
  <li>console.table</li>
</ul>
<p>A MySQL database containing a table (called products) is in use:</p>
    <ul>
        <li>item_id: auto incrementing</li>
        <li>product_name</li>
        <li>department_name</li>
        <li>price</li>
        <li>stock_quantity</li>
    </ul>

--------------------------------------------------------------------------------------------------------

<h2>Using the App:</h2>
<p>The application pulls from (and pushes to) a MySQL database. The user interface is built through Inquirer that interacts with the database through connection.query.</p>

<h3>Customer View</h3>
<p>Customers' functuality is limited to viewing and purchasing:</p>
    <ul>
        <li>Viewing Inventory:</li>
            <ul>
                <li>Item ID</li>
                <li>Product Name</li>
                <li>Price</li>
            </ul>
        <li>Purchasing</li>
            <ul>
                <li>Can choose item ID that they wish to purchase</li>
                <li>List the amount they wish to buy</li>
                    <ul><li>If the desired amount is greater than the stock, they are unable to complete purchase.</li></ul>
                <li>See final price</li>
            </ul>
    </ul>

<h3>Manager View</h3>
<p>The manager's view is greatly expanded. They have the capability to view:</p>
    <ul>
        <li>More inventory detail:
            <ul>
                <li>Item ID</li>
                <li>Product Name</li>
                <li>Department Name</li>
                <li>Price</li>
                <li>Stock quantity</li>
            </ul>
        <li>View the products with 5 or fewer items left</li>
        <li>Add completely new products to the database</li>
        <li> Update existing items' stock quantity.</li>
    </ul>

--------------------------------------------------------------------------------------------------------

<h2>Results:</h2>
<p>Once your the associated command are complete, the database is updated accordingly for future use.</p>

--------------------------------------------------------------------------------------------------------