import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style/Leaderboard.css'
import { HiMiniArrowTrendingUp } from "react-icons/hi2"

function LeaderBoard() {



    return (
        <div className='leader_board'>
            <div className='container'>
                <h1>Leader Boards</h1>
                <div className="box_content">
                    <div className='box_header'>
                        <h3>Basic Backtest</h3>
                        <div className='right_con'>
                            <button>Slippage
                            </button>
                            <select>
                                <option value="0%">0%</option>
                                <option value="1%">1%</option>
                                <option value="2%">2%</option>
                            </select>
                        </div>
                    </div>
                    <table className=''>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Calmar Ratio</th>
                                <th>Overall Profit</th>
                                <th>Avg. Daily Profit</th>
                                <th>Win %(Day)</th>
                                <th>Price (Rs)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Based on premium and</td>
                                <td><HiMiniArrowTrendingUp className='icon' /> 0.84</td>
                                <td>132767.1</td>
                                <td>108.38</td>
                                <td>0.6</td>
                                <td>-</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>strategy_name</td>
                                <td><HiMiniArrowTrendingUp className='icon' /> 0.69</td>
                                <td>208500.31</td>
                                <td>140.5</td>
                                <td>0.35</td>
                                <td>-</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Wait and trade_Save</td>
                                <td><HiMiniArrowTrendingUp className='icon' /> 0.67</td>
                                <td>70823.17</td>
                                <td>64.33</td>
                                <td>0.6</td>
                                <td>-</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>iron condor</td>
                                <td><HiMiniArrowTrendingUp className='icon' /> 0.64</td>
                                <td>88978.5</td>
                                <td>69.35</td>
                                <td>0.62</td>
                                <td>-</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>strategy_name</td>
                                <td><HiMiniArrowTrendingUp className='icon' /> 0.59</td>
                                <td>157335.75</td>
                                <td>128.75</td>
                                <td>0.62</td>
                                <td>-</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>strategy_name</td>
                                <td><HiMiniArrowTrendingUp className='icon' /> 0.59</td>
                                <td>157335.75</td>
                                <td>128.75</td>
                                <td>0.62</td>
                                <td>-</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Based on premium wit</td>
                                <td><HiMiniArrowTrendingUp className='icon' /> 0.57</td>
                                <td>63852.65</td>
                                <td>87.23</td>
                                <td>0.48</td>
                                <td>-</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>strategy_name</td>
                                <td><HiMiniArrowTrendingUp className='icon' /> 0.53</td>
                                <td>194687.52</td>
                                <td>131.19</td>
                                <td>0.35</td>
                                <td>-</td>
                                <td><button>View</button></td>
                            </tr>
                            
                            <tr>
                                <td>9</td>
                                <td>strategy_name</td>
                                <td><HiMiniArrowTrendingUp className='icon' /> 0.44</td>
                                <td>74852.97</td>
                                <td>60.22</td>
                                <td>0.57</td>
                                <td>500</td>
                                <td><button>Buy</button></td>
                            </tr>
                            
                            <tr>
                                <td>10</td>
                                <td>Selling with re entr</td>
                                <td><HiMiniArrowTrendingUp className='icon' /> 0.31</td>
                                <td>127095.7</td>
                                <td>106.36</td>
                                <td>0.61</td>
                                <td>-</td>
                                <td><button>View</button></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <p>If you want to see other design based on React like., meeting scheduled. <NavLink to='https://meeting-schedule-site.netlify.app/' target='_blank'>Click Here</NavLink></p>
            </div>
        </div>
    )
}

export default LeaderBoard