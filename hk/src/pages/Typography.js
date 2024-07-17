// 1. Importing Components
//import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logos from "../../src/components/Logos";
//import NavBar from "../../src/components/Navbar";

// export default function Privacy() {
export const Typography = () => {
  return (
    <div>
       <main>
        <div className="wrapper">
          <div className="container fullwidth">
            <div className="formContainer">
              <Logos />
              <div className="content align-left">
                <div class="entry-content">
                  <h1>Sample typography</h1>
                  <p>
                    The purpose of this HTML is to help determine what default
                    settings are with CSS and to make sure that all possible
                    HTML Elements are included in this HTML so as to not miss
                    any possible Elements when designing a site.
                  </p>
                  <hr />
                  <h1>Heading 1</h1>
                  <h2>Heading 2</h2>
                  <h3>Heading 3</h3>
                  <h4>Heading 4</h4>
                  <h5>Heading 5</h5>
                  <h6>Heading 6</h6>
                  <p>
                    <small>
                      <a href="#wrapper">[top]</a>
                    </small>
                  </p>
                  <hr />
                  <h2 id="paragraph">Paragraph</h2>
                  <p>
                    Lorem ipsum dolor sit amet,{" "}
                    <a href="#" title="test link">
                      test link
                    </a>{" "}
                    adipiscing elit. Nullam dignissim convallis est. Quisque
                    aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit
                    amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec,
                    gravida vehicula, nisl. Praesent mattis, massa quis luctus
                    fermentum, turpis mi volutpat justo, eu volutpat enim diam
                    eget metus. Maecenas ornare tortor. Donec sed tellus eget
                    sapien fringilla nonummy. Mauris a ante. Suspendisse quam
                    sem, consequat at, commodo vitae, feugiat in, nunc. Morbi
                    imperdiet augue quis tellus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer
                    adipiscing elit. Nullam dignissim convallis est. Quisque
                    aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit
                    amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec,
                    gravida vehicula, nisl. Praesent mattis, massa quis luctus
                    fermentum, turpis mi volutpat justo, eu volutpat enim diam
                    eget metus. Maecenas ornare tortor. Donec sed tellus eget
                    sapien fringilla nonummy. Mauris a ante. Suspendisse quam
                    sem, consequat at, commodo vitae, feugiat in, nunc. Morbi
                    imperdiet augue quis tellus.
                  </p>
                  <p>
                    <small>
                      <a href="#wrapper">[top]</a>
                    </small>
                  </p>
                  <hr />
                  <h2 id="list_types">List Types</h2>
                  <h3>Definition List</h3>
                  <dl>
                    <dt>Definition List Title</dt>
                    <dd>This is a definition list division.</dd>
                  </dl>
                  <h3>Ordered List</h3>
                  <ol>
                    <li>List Item 1</li>
                    <li>List Item 2</li>
                    <li>List Item 3</li>
                  </ol>
                  <h3>Unordered List</h3>
                  <ul>
                    <li>List Item 1</li>
                    <li>List Item 2</li>
                    <li>List Item 3</li>
                  </ul>
                  <div class="container">
                    <h2>Form control: input</h2>
                    <p>
                      The form below contains two input elements; one of type
                      text and one of type password:
                    </p>
                    <form>
                      <div class="form-group">
                        <label for="usr">Name:</label>
                        <input type="text" class="form-control" id="usr" />
                      </div>
                      <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" />
                      </div>
                    </form>
                  </div>

                  <div class="container">
                    <h2>Vertical (basic) form</h2>
                    <form action="/action_page.php">
                      <div class="form-group">
                        <label for="email">Email:</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Enter email"
                          name="email"
                        />
                      </div>
                      <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input
                          type="password"
                          class="form-control"
                          id="pwd"
                          placeholder="Enter password"
                          name="pwd"
                        />
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" name="remember" /> Remember me
                        </label>
                      </div>
                      <button type="submit" class="btn btn-default">
                        Submit
                      </button>
                    </form>
                  </div>

                  <div class="container">
                    <h2>Inline form</h2>
                    <p>
                      Make the viewport larger than 768px wide to see that all
                      of the form elements are inline, left aligned, and the
                      labels are alongside.
                    </p>
                    <form class="form-inline" action="/action_page.php">
                      <div class="form-group">
                        <label for="email">Email:</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Enter email"
                          name="email"
                        />
                      </div>
                      <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input
                          type="password"
                          class="form-control"
                          id="pwd"
                          placeholder="Enter password"
                          name="pwd"
                        />
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" name="remember" /> Remember me
                        </label>
                      </div>
                      <button type="submit" class="btn btn-default">
                        Submit
                      </button>
                    </form>
                  </div>

                  <div class="container">
                    <h2>Horizontal form</h2>
                    <form class="form-horizontal" action="/action_page.php">
                      <div class="form-group">
                        <label class="control-label col-sm-2" for="email">
                          Email:
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-sm-2" for="pwd">
                          Password:
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="password"
                            class="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="pwd"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <div class="checkbox">
                            <label>
                              <input type="checkbox" name="remember" /> Remember
                              me
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <button type="submit" class="btn btn-default">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="container">
                    <h2>Form control: textarea</h2>
                    <p>The form below contains a textarea for comments:</p>
                    <form>
                      <div class="form-group">
                        <label for="comment">Comment:</label>
                        <textarea
                          class="form-control"
                          rows="5"
                          id="comment"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div class="container">
                    <h2>Form control: checkbox</h2>
                    <p>
                      The form below contains three checkboxes. The last option
                      is disabled:
                    </p>
                    <form>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" value="" />
                          Option 1
                        </label>
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" value="" />
                          Option 2
                        </label>
                      </div>
                      <div class="checkbox disabled">
                        <label>
                          <input type="checkbox" value="" disabled="" />
                          Option 3
                        </label>
                      </div>
                    </form>
                  </div>
                  <div class="container">
                    <h2>Form control: radio buttons</h2>
                    <p>
                      The form below contains three radio buttons. The last
                      option is disabled:
                    </p>
                    <form>
                      <div class="radio">
                        <label>
                          <input type="radio" name="optradio" />
                          Option 1
                        </label>
                      </div>
                      <div class="radio">
                        <label>
                          <input type="radio" name="optradio" />
                          Option 2
                        </label>
                      </div>
                      <div class="radio disabled">
                        <label>
                          <input type="radio" name="optradio" disabled="" />
                          Option 3
                        </label>
                      </div>
                    </form>
                  </div>
                  <div class="container">
                    <h2>Form control: select</h2>
                    <p>
                      The form below contains two dropdown menus (select lists):
                    </p>
                    <form>
                      <div class="form-group">
                        <label for="sel1">Select list (select one):</label>
                        <select class="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>

                        <label for="sel2">
                          Mutiple select list (hold shift to select more than
                          one):
                        </label>
                        <select multiple="" class="form-control" id="sel2">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div class="container">
                    <h2>Horizontal form with static control</h2>
                    <form class="form-horizontal" action="/action_page.php">
                      <div class="form-group">
                        <label class="control-label col-sm-2" for="email">
                          Email:
                        </label>
                        <div class="col-sm-10">
                          <p class="form-control-static">someone@example.com</p>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-sm-2" for="pwd">
                          Password:
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="password"
                            class="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="pwd"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <button type="submit" class="btn btn-default">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="container">
                    <h3>Input Groups</h3>
                    <p>
                      The .input-group class is a container to enhance an input
                      by adding an icon, text or a button in front or behind it
                      as a "help text".
                    </p>
                    <p>
                      The .input-group-addon class attaches an icon or help text
                      next to the input field.
                    </p>

                    <form>
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="glyphicon glyphicon-user"></i>
                        </span>
                        <input
                          id="email"
                          type="text"
                          class="form-control"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="glyphicon glyphicon-lock"></i>
                        </span>
                        <input
                          id="password"
                          type="password"
                          class="form-control"
                          name="password"
                          placeholder="Password"
                        />
                      </div>

                      <div class="input-group">
                        <span class="input-group-addon">Text</span>
                        <input
                          id="msg"
                          type="text"
                          class="form-control"
                          name="msg"
                          placeholder="Additional Info"
                        />
                      </div>
                    </form>
                    <br />

                    <p>It can also be used on the right side of the input:</p>
                    <form>
                      <div class="input-group">
                        <input
                          id="email"
                          type="text"
                          class="form-control"
                          name="email"
                          placeholder="Email"
                        />
                        <span class="input-group-addon">
                          <i class="glyphicon glyphicon-user"></i>
                        </span>
                      </div>
                      <div class="input-group">
                        <input
                          id="password"
                          type="password"
                          class="form-control"
                          name="password"
                          placeholder="Password"
                        />
                        <span class="input-group-addon">
                          <i class="glyphicon glyphicon-lock"></i>
                        </span>
                      </div>
                    </form>
                  </div>
                  <div class="container">
                    <h1>Input Group Button</h1>
                    <p>
                      The .input-group class is a container to enhance an input
                      by adding an icon, text or a button in front or behind it
                      as a "help text".
                    </p>
                    <p>
                      The .input-group-btn class attaches a button next to an
                      input field. This is often used as a search bar:
                    </p>
                    <form action="/action_page.php">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search"
                          name="search"
                        />
                        <div class="input-group-btn">
                          <button class="btn btn-default" type="submit">
                            <i class="glyphicon glyphicon-search"></i> Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="container">
                    <h2>Horizontal form: control states</h2>
                    <form class="form-horizontal">
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Focused</label>
                        <div class="col-sm-10">
                          <input
                            class="form-control"
                            id="focusedInput"
                            type="text"
                            value="Click to focus..."
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label
                          for="disabledInput"
                          class="col-sm-2 control-label"
                        >
                          Disabled
                        </label>
                        <div class="col-sm-10">
                          <input
                            class="form-control"
                            id="disabledInput"
                            type="text"
                            placeholder="Disabled input here..."
                            disabled=""
                          />
                        </div>
                      </div>
                      <fieldset disabled="">
                        <div class="form-group">
                          <label
                            for="disabledTextInput"
                            class="col-sm-2 control-label"
                          >
                            Disabled input and select list (Fieldset disabled)
                          </label>
                          <div class="col-sm-10">
                            <input
                              type="text"
                              id="disabledTextInput"
                              class="form-control"
                              placeholder="Disabled input"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <label
                            for="disabledSelect"
                            class="col-sm-2 control-label"
                          ></label>
                          <div class="col-sm-10">
                            <select id="disabledSelect" class="form-control">
                              <option>Disabled select</option>
                            </select>
                          </div>
                        </div>
                      </fieldset>
                      <div class="form-group has-success has-feedback">
                        <label
                          class="col-sm-2 control-label"
                          for="inputSuccess"
                        >
                          Input with success and glyphicon
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputSuccess"
                          />
                          <span class="glyphicon glyphicon-ok form-control-feedback"></span>
                        </div>
                      </div>
                      <div class="form-group has-warning has-feedback">
                        <label
                          class="col-sm-2 control-label"
                          for="inputWarning"
                        >
                          Input with warning and glyphicon
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputWarning"
                          />
                          <span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
                        </div>
                      </div>
                      <div class="form-group has-error has-feedback">
                        <label class="col-sm-2 control-label" for="inputError">
                          Input with error and glyphicon
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            id="inputError"
                          />
                          <span class="glyphicon glyphicon-remove form-control-feedback"></span>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="container">
                    <h2>Inline form: control states</h2>
                    <form class="form-inline">
                      <div class="form-group">
                        <label for="focusedInput">Focused</label>
                        <input
                          class="form-control"
                          id="focusedInput"
                          type="text"
                        />
                      </div>
                      <div class="form-group">
                        <label for="inputPassword">Disabled</label>
                        <input
                          class="form-control"
                          id="disabledInput"
                          type="text"
                          disabled=""
                        />
                      </div>
                      <div class="form-group has-success has-feedback">
                        <label for="inputSuccess2">Input with success</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputSuccess2"
                        />
                        <span class="glyphicon glyphicon-ok form-control-feedback"></span>
                      </div>
                      <div class="form-group has-warning has-feedback">
                        <label for="inputWarning2">Input with warning</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputWarning2"
                        />
                        <span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
                      </div>
                      <div class="form-group has-error has-feedback">
                        <label for="inputError2">Input with error</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputError2"
                        />
                        <span class="glyphicon glyphicon-remove form-control-feedback"></span>
                      </div>
                    </form>
                  </div>
                  <div class="container">
                    <h2>Input Sizing</h2>
                    <p>
                      The form below shows input elements with different heights
                      using .input-lg and .input-sm:
                    </p>
                    <form>
                      <div class="form-group">
                        <label for="inputdefault">Default input</label>
                        <input
                          class="form-control"
                          id="inputdefault"
                          type="text"
                        />
                      </div>
                      <div class="form-group">
                        <label for="inputlg">input-lg</label>
                        <input
                          class="form-control input-lg"
                          id="inputlg"
                          type="text"
                        />
                      </div>
                      <div class="form-group">
                        <label for="inputsm">input-sm</label>
                        <input
                          class="form-control input-sm"
                          id="inputsm"
                          type="text"
                        />
                      </div>
                      <div class="form-group">
                        <label for="sel1">Default select list</label>
                        <select class="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="sel2">input-lg</label>
                        <select class="form-control input-lg" id="sel2">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="sel3">input-sm</label>
                        <select class="form-control input-sm" id="sel3">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div class="container">
                    <h1>Input Group Size</h1>
                    <p>
                      The .input-group class is a container to enhance an input
                      by adding an icon, text or a button in front or behind it
                      as a "help text".
                    </p>
                    <p>
                      Use the .input-group-lg if you want a large input group:
                    </p>
                    <form>
                      <div class="input-group input-group-lg">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search"
                        />
                        <div class="input-group-btn">
                          <button class="btn btn-default" type="submit">
                            <i class="glyphicon glyphicon-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                    <br />

                    <p>
                      Use the .input-group-sm if you want a small input group:
                    </p>
                    <form>
                      <div class="input-group input-group-sm">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search"
                        />
                        <div class="input-group-btn">
                          <button class="btn btn-default" type="submit">
                            <i class="glyphicon glyphicon-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="container">
                    <h2>Column Sizing</h2>
                    <p>
                      The form below shows input elements with different widths
                      using different .col-xs-* classes:
                    </p>
                    <form>
                      <div class="form-group row">
                        <div class="col-xs-2">
                          <label for="ex1">col-xs-2</label>
                          <input class="form-control" id="ex1" type="text" />
                        </div>
                        <div class="col-xs-3">
                          <label for="ex2">col-xs-3</label>
                          <input class="form-control" id="ex2" type="text" />
                        </div>
                        <div class="col-xs-4">
                          <label for="ex3">col-xs-4</label>
                          <input class="form-control" id="ex3" type="text" />
                        </div>
                      </div>
                    </form>
                  </div>
                  <p>
                    <small>
                      <a href="#wrapper">[top]</a>
                    </small>
                  </p>
                  <hr />
                  <h2 id="form_elements">Forms</h2>
                  <fieldset>
                    <legend>Legend</legend>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Nullam dignissim convallis est. Quisque aliquam. Donec
                      faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.
                      Aliquam libero nisi, imperdiet at, tincidunt nec, gravida
                      vehicula, nisl. Praesent mattis, massa quis luctus
                      fermentum, turpis mi volutpat justo, eu volutpat enim diam
                      eget metus.
                    </p>

                    <form method="post" action="#">
                      <div class="holder formContainerCustom">
                        <h2>Custom Radio Buttons</h2>
                        <p>
                          Which text editor do you think is the best? Remember:
                          your for label must be the same with your input id{" "}
                        </p>
                        <div class="row">
                          <input
                            type="radio"
                            name="name"
                            id="dreamweaver"
                            checked=""
                          />
                          <label for="dreamweaver">Adobe Dreamweaver</label>
                        </div>
                        <div class="row">
                          <input type="radio" name="name" id="sublime" />
                          <label for="sublime">Sublime Text</label>
                        </div>
                        <div class="row">
                          <input type="radio" name="name" id="visual" />
                          <label for="visual">Visual Studio Code</label>
                        </div>
                        <div class="row">
                          <input type="radio" name="name" id="notepad" />
                          <label for="notepad">Notepad++</label>
                        </div>
                      </div>

                      <div class="holder formContainerCustom">
                        <h2>Custom Checkboxes</h2>
                        <p>Which Programming language do you want to learn</p>
                        <div class="row">
                          <input
                            type="checkbox"
                            name="name"
                            id="javascript"
                            checked=""
                          />
                          <label for="javascript">Javascript</label>
                        </div>
                        <div class="row">
                          <input type="checkbox" name="name" id="php" />
                          <label for="php">PHP</label>
                        </div>
                        <div class="row">
                          <input type="checkbox" name="name" id="python" />
                          <label for="python">Python</label>
                        </div>
                        <div class="row">
                          <input type="checkbox" name="name" id="net" />
                          <label for="net">.Net</label>
                        </div>
                        <div class="row">
                          <input type="checkbox" name="name" id="node" />
                          <label for="node">Node JS</label>
                        </div>
                      </div>

                      <div class="holder formContainerCustom">
                        <h2>Custom Input + Textarea </h2>
                        <div class="row">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Please enter your name"
                          />
                        </div>
                        <div class="row">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Please enter your password"
                          />
                        </div>
                        <div class="row">
                          <textarea
                            id="comments"
                            placeholder="Please enter your comments"
                          ></textarea>
                        </div>
                      </div>

                      <div class="holder formContainerCustom">
                        <h2>Custom Select</h2>
                        <div class="row">
                          <p>Please select the payment method.</p>
                        </div>
                        <div class="row">
                          <div class="select">
                            <select>
                              <option>Debit / Master Card</option>
                              <option>Credit Card</option>
                              <option>Bank Transfer</option>
                              <option>Paypal</option>
                              <option>Skrill</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="holder customToggle">
                        <h2>Custom Toggle Switch</h2>
                        <div class="row">
                          <p>Do you want to proceed?</p>
                        </div>
                        <div class="row">
                          <input type="checkbox" id="toggle" />
                          <label for="toggle">
                            <span class="yes">Yes</span>
                            <span class="no">No</span>
                          </label>
                        </div>
                      </div>
                    </form>

                    <form>
                      <h2>Form Element</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Nullam dignissim convallis est. Quisque aliquam.
                        Donec faucibus. Nunc iaculis suscipit dui.
                      </p>
                      <p>
                        <label for="text_field">Text Field:</label>
                        <br />
                        <input type="text" id="text_field" />
                      </p>
                      <p>
                        <label for="text_area">Text Area:</label>
                        <br />
                        <textarea id="text_area"></textarea>
                      </p>
                      <p>
                        <label for="select_element">Select Element:</label>
                        <br />
                        <select name="select_element">
                          <optgroup label="Option Group 1">
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </optgroup>
                          <optgroup label="Option Group 2">
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                          </optgroup>
                        </select>
                      </p>
                      <p>
                        <label for="radio_buttons">Radio Buttons:</label>
                      </p>
                      <p>
                        <input
                          type="radio"
                          class="radio"
                          name="radio_button"
                          value="radio_1"
                        />{" "}
                        Radio 1
                        <br />
                        <input
                          type="radio"
                          class="radio"
                          name="radio_button"
                          value="radio_2"
                        />{" "}
                        Radio 2
                        <br />
                        <input
                          type="radio"
                          class="radio"
                          name="radio_button"
                          value="radio_3"
                        />{" "}
                        Radio 3
                      </p>
                      <p>
                        <label for="checkboxes">Checkboxes:</label>
                      </p>
                      <p>
                        <input
                          type="checkbox"
                          class="checkbox"
                          name="checkboxes"
                          value="check_1"
                        />{" "}
                        Radio 1
                        <br />
                        <input
                          type="checkbox"
                          class="checkbox"
                          name="checkboxes"
                          value="check_2"
                        />{" "}
                        Radio 2
                        <br />
                        <input
                          type="checkbox"
                          class="checkbox"
                          name="checkboxes"
                          value="check_3"
                        />{" "}
                        Radio 3
                      </p>
                      <p>
                        <label for="password">Password:</label>
                      </p>
                      <p>
                        <input
                          type="password"
                          class="password"
                          name="password"
                        />
                      </p>
                      <p>
                        <label for="file">File Input:</label>
                        <br />
                        <input type="file" class="file" name="file" />
                      </p>
                      <p>
                        <input class="button" type="reset" value="Clear" />
                        <input class="button" type="submit" value="Submit" />
                      </p>
                    </form>
                  </fieldset>
                  <p>
                    <small>
                      <a href="#wrapper">[top]</a>
                    </small>
                  </p>
                  <hr />

                  <div class="responsiveTbl">
                    <table>
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Full Name</th>
                          <th>Starting Price</th>
                          <th>Review</th>
                          <th>Hiring</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>John Smith</td>
                          <td>
                            <span class="price">£40 / hr</span>
                          </td>
                          <td>9.9</td>
                          <td>
                            <a href="#" class="btn">
                              Hire me
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>William Taylor</td>
                          <td>
                            <span class="price">£38 / hr</span>
                          </td>
                          <td>9.5</td>
                          <td>
                            <a href="#" class="btn">
                              Hire me
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>George Wilson</td>
                          <td>
                            <span class="price">£35 / hr</span>
                          </td>
                          <td>9.2</td>
                          <td>
                            <a href="#" class="btn">
                              Hire me
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Ellen Walker</td>
                          <td>
                            <span class="price">£39 / hr</span>
                          </td>
                          <td>9.1</td>
                          <td>
                            <a href="#" class="btn">
                              Hire me
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Emma Hall</td>
                          <td>
                            <span class="price">£35 / hr</span>
                          </td>
                          <td>9.0</td>
                          <td>
                            <a href="#" class="btn">
                              Hire me
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 id="tables">Tables</h2>
                  <table cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <th>Table Header 1</th>
                        <th>Table Header 2</th>
                        <th>Table Header 3</th>
                      </tr>
                      <tr>
                        <td>Division 1</td>
                        <td>Division 2</td>
                        <td>Division 3</td>
                      </tr>
                      <tr class="even">
                        <td>Division 1</td>
                        <td>Division 2</td>
                        <td>Division 3</td>
                      </tr>
                      <tr>
                        <td>Division 1</td>
                        <td>Division 2</td>
                        <td>Division 3</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <small>
                      <a href="#wrapper">[top]</a>
                    </small>
                  </p>
                  <hr />
                  <h2 id="misc">
                    Misc Stuff – abbr, acronym, pre, code, sub, sup, etc.
                  </h2>
                  <p>
                    Lorem <sup>superscript</sup> dolor <sub>subscript</sub>{" "}
                    amet, consectetuer adipiscing elit. Nullam dignissim
                    convallis est. Quisque aliquam. <cite>cite</cite>. Nunc
                    iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
                    imperdiet at, tincidunt nec, gravida vehicula, nisl.
                    Praesent mattis, massa quis luctus fermentum, turpis mi
                    volutpat justo, eu volutpat enim diam eget metus. Maecenas
                    ornare tortor. Donec sed tellus eget sapien fringilla
                    nonummy.{" "}
                    <acronym title="National Basketball Association">
                      NBA
                    </acronym>{" "}
                    Mauris a ante. Suspendisse quam sem, consequat at, commodo
                    vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.{" "}
                    <abbr title="Avenue">AVE</abbr>
                  </p>
                  <pre>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Nullam dignissim convallis est. Quisque aliquam. Donec
                      faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.
                      Aliquam libero nisi, imperdiet at, tincidunt nec, gravida
                      vehicula, nisl. Praesent mattis, massa quis luctus
                      fermentum, turpis mi volutpat justo, eu volutpat enim diam
                      eget metus. Maecenas ornare tortor. Donec sed tellus eget
                      sapien fringilla nonummy.
                      <acronym title="National Basketball Association">
                        NBA
                      </acronym>
                      Mauris a ante. Suspendisse quam sem, consequat at, commodo
                      vitae, feugiat in, nunc. Morbi imperdiet augue quis
                      tellus.
                      <abbr title="Avenue">AVE</abbr>
                    </p>
                  </pre>
                  <blockquote>
                    <p>
                      “This stylesheet is going to help so freaking much.”
                      <br /> -Blockquote
                    </p>
                  </blockquote>
                  <p>
                    <small>
                      <a href="#wrapper">[top]</a>
                    </small>
                    <br />
                  </p>

                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
